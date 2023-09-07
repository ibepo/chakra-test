import { Box, Flex, VStack, HStack, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSWR from 'swr'
import { motion, AnimatePresence } from 'framer-motion'
import { useInterval } from 'react-use'

export default function ShortMessage() {
  const type = '型钢'
  const url = `https://interface.chinatsi.net/api_v1/wechatapi/shortmessageel?params=${type}`
  const fetcher = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data.data
  }
  const { data, error, isLoading } = useSWR('shortMessage', fetcher)
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount((prevCount) => {
      if (prevCount >= data?.length - 1) {
        return 0
      } else {
        return prevCount + 1
      }
    })
  }, 5000)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <VStack
      overflowX='scroll'
      spacing={8}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <AnimatePresence>
        <motion.div
          key={'countdown' + count}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0, position: 'absolute' }}
        >
          <Center
            m={4}
            p={4}
            maxHeight='120px'
            border='1px'
            borderColor='gray.200'
            borderRadius={10}
            bg='gray.50'
          >
            {data[count]._source.shortmessage}
          </Center>
        </motion.div>
      </AnimatePresence>

      {/* {data.map((item) => (
        <Box
          flexShrink={0}
          w='full'
          m={4}
          p={4}
          border='1px'
          borderColor='gray.200'
          borderRadius={10}
          bg='gray.50'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ rotate: 2 }}
            transition={{ duration: 0.5 }}
          >
            {item._source.shortmessage}
          </motion.div>
        </Box>
      ))} */}
    </VStack>
  )
}
