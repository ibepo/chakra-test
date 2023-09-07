import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

export default function Forecast() {
  const url =
    'https://interface.chinatsi.net/api_v1/wechatapi/data/section/forecast?token=&code=RiMS8GEnTWgKDs1yKt9KJh6Cn_Xntkw3Casy8eXs-9A'
  const fetcher = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const { data, error, isLoading } = useSWR('forecast', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <Box
      m={4}
      p={4}
      border='1px'
      borderColor='gray.200'
      borderRadius={10}
      bg='gray.50'
    >
      <Flex flexDirection='column'>
        <Box fontSize='xl'>{data[0].subtime}</Box>
        <Box>{data[0].forecastmemo}</Box>
      </Flex>
    </Box>
  )
}
