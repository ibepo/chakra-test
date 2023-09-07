import { React, useState } from 'react'
import {
  Box,
  chakra,
  Radio,
  RadioGroup,
  Text,
  useRadio,
  Input,
  Textarea,
  useRadioGroup,
  useToast,
  Stack,
  HStack,
  VStack,
  Flex,
  Center,
} from '@chakra-ui/react'
import Poster from '../componets/Poster'
import RadioCard from '../componets/RadioCard'
import { postAtom } from '../store/JotaiStore'
import { useAtom } from 'jotai'

export default function Gen() {
  const themes = [
    { name: '明白', bg: '#E6E6E6', fg: '#ea4f44' },
    { name: '暗黑', bg: '#1b1c20', fg: '#f8d86a' },
  ]
  const toast = useToast()

  const [post, updatePost] = useAtom(postAtom)

  // about radioGroud
  const handleChange = value => {
    // toast({
    //   title: `切换主题到 ${value}!`,
    //   status: 'success',
    //   duration: 2000,
    // })

    updatePost({
      ...post,
      theme: value,
    })
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '明白',
    onChange: handleChange,
  })

  let handleInputChange = e => {
    let inputValue = e.target.value
    updatePost({
      ...post,
      title: inputValue,
    })
  }

  let handleTextAreaChange = e => {
    let inputValue = e.target.value
    updatePost({
      ...post,
      content: inputValue,
    })
  }

  return (
    <Center maxW={'1300px'} mt={6} mx={'auto'} px={4}>
      <Flex w={'full'}>
        {/* 左侧展示区 */}
        <Box flex='1' w={'full'}>
          <Poster />
        </Box>
        {/* 右侧操作区 */}
        <VStack flex='1' w={'800px'} {...getRootProps()}>
          <Text>内容录入</Text>
          <Input variant='filled' onChange={handleInputChange} placeholder={post.title} size='lg' w={400} />
          <Textarea
            w={400}
            h={200}
            variant='filled'
            value={post.context}
            onChange={handleTextAreaChange}
            placeholder={post.content}
            size='lg'
          />
          <Text>主题选择</Text>
          <HStack>
            {themes.map(theme => {
              return <RadioCard key={theme.name} color={theme.bg} {...getRadioProps({ value: theme.name })} />
            })}
          </HStack>
        </VStack>
      </Flex>
    </Center>
  )
}
