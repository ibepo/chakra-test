import React, { useState, useEffect } from 'react'
import { Flex, VStack, Box, HStack, Center, Divider } from '@chakra-ui/react'
import useSWR from 'swr'
import ReactDOM from 'react-dom'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

export default function Chart() {
  const start = `2023-06-01`
  const end = `2023-08-02`
  const token = `eyJhbGciOiJIUzI1NiIsImlhdCI6MTY5MDg1Mzc1NywiZXhwIjoxNjkwODU3MzU3fQ.eyJ1c2VyaWQiOjY2OH0.5BJ7JKEocndS2pe4g9G2-FkDrnLRFwHVomvjAJI1F5c`
  const url = `https://service.chinatsi.net/api_v1/wechat/data/billet/nationwideprice?begin=${start}&end=${end}&token=${token}`
  const fetcher = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const { data, error, isLoading } = useSWR('chart', fetcher)
  const [result, serResult] = useState([])
  useEffect(() => {
    if (data) {
      var rev = [...data].reverse()
      serResult(rev)
    }
  }, [data])

  const start2 = `2022-01-01`
  const end2 = `2022-12-30`
  const url2 = `https://service.chinatsi.net/api_v1/wechat/data/billet/nationwideprice?begin=${start2}&end=${end2}&token=${token}`
  const fetcher2 = async () => {
    const response = await fetch(url2)
    const data = await response.json()
    return data
  }
  const { data: data2 } = useSWR('chart2', fetcher2)
  const [result2, serResult2] = useState([])
  useEffect(() => {
    if (data2) {
      var rev2 = [...data2].reverse()
      // console.log(rev2)
      serResult2(rev2)
    }
  }, [data2])

  if (result.length == 0) {
    return <div>loading1...</div>
  }

  if (result2.length == 0) {
    return <div>loading2...</div>
  }

  return (
    <VStack>
      <LineChart
        width={360}
        height={250}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray='3 3 3' />
        <XAxis dataKey='datadate' />
        <YAxis type={'number'} domain={[3200, 5000]} />
        <Tooltip />
        <Legend />
        <Line
          data={result}
          isAnimationActive={true}
          animationEasing='linear'
          type='step'
          dataKey='price'
          stroke='#D87461'
          dot={false}
          legendType='rect'
          name='2023年'
          strokeWidth={1}
        />
        <Line
          data={result2}
          isAnimationActive={true}
          animationEasing='linear'
          type='step'
          dataKey='price'
          stroke='#217421'
          dot={false}
          legendType='rect'
          name='2022年'
          strokeWidth={1}
        />
      </LineChart>
    </VStack>
  )
}
