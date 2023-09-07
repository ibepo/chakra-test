import { Flex, VStack, Box, HStack, Center, Divider } from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

const Price = ({ item }) => {
  if (item.uppercentage.includes('-')) {
    return (
      <Box
        flex={1}
        fontWeight='bold'
        color='green.500'
        fontSize='xl'
        mr={5}
        textAlign={['right', 'top']}
      >
        {item.price}
      </Box>
    )
  } else {
    return (
      <Box
        mr={5}
        flex={1}
        fontWeight='semibold'
        color='red.500'
        fontSize='xl'
        textAlign={['right', 'top']}
      >
        {item.price}
      </Box>
    )
  }
}

const UpperCentage = ({ item }) => {
  if (item.uppercentage.includes('-')) {
    return (
      <VStack
        color='green.500'
        flex={1}
        fontWeight='semibold'
        align='end'
        spacing={0}
      >
        <Center
          w='100%'
          color='gray.200'
          bg='green.500'
          lineHeight='md'
          fontSize='xl'
          rounded='base'
        >
          <Box>{item.uppercentage}</Box>
        </Center>
        <Box fontSize='1px'>{item.chg}</Box>
      </VStack>
    )
  } else {
    return (
      <VStack
        color='red.600'
        flex={1}
        fontWeight='semibold'
        align='end'
        spacing={0}
      >
        <Center
          w='100%'
          color='gray.200'
          lineHeight='md'
          bg='red.500'
          fontSize='xl'
          rounded='base'
        >
          +{item.uppercentage.trim()}
        </Center>
        <Box fontSize='1px'>+{item.chg}</Box>
      </VStack>
    )
  }
}

export default function NationWideprice() {
  const start = `2023-07-01`
  const end = `2023-08-21`
  const token = `eyJhbGciOiJIUzI1NiIsImlhdCI6MTY5MDg1Mzc1NywiZXhwIjoxNjkwODU3MzU3fQ.eyJ1c2VyaWQiOjY2OH0.5BJ7JKEocndS2pe4g9G2-FkDrnLRFwHVomvjAJI1F5c`
  const url = `https://service.chinatsi.net/api_v1/wechat/data/billet/nationwideprice?begin=${start}&end=${end}&token=${token}`
  const fetcher = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const { data, error, isLoading } = useSWR('nationWideprice', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <VStack maxW='md' spacing='0px' py={4}>
      {/* {title} */}
      <Flex justify='space-around' w={'full'} mb={2}>
        <Box flex={2} textAlign='left'>
          日期
        </Box>
        <Box flex={1} textAlign='right' mr={5}>
          当前值
        </Box>
        <Box flex={1} textAlign='right'>
          涨跌幅
        </Box>
      </Flex>
      {/* {列表} */}
      <VStack
        w={'full'}
        h={'600'}
        overflowX='scroll'
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {data.map((item) => (
          <VStack w='full' p={1} align={'center'} key={item.datadate}>
            <Flex w='full' justify='space-around'>
              {/* 日期 */}
              <Flex flexDir='column' flex={2}>
                <Box fontWeight={'bold'} fontSize={'xl'} color={'gray.800'}>
                  {item.datadate.split('-')[1]}/{item.datadate.split('-')[2]}
                </Box>
                <Box fontWeight={'base'} color={'gray.500'} fontSize={'sm'}>
                  {item.datadate.split('-')[0]}
                </Box>
              </Flex>
              {/* 价格 */}
              <Price item={item} />
              {/* 涨幅 */}
              <UpperCentage item={item} />
            </Flex>
            <Divider />
          </VStack>
        ))}
      </VStack>

      {/* foot */}
    </VStack>
  )
}
