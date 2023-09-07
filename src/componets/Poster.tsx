import React from 'react'
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  HStack,
  Container,
  Square,
  VStack,
  Divider,
  Spacer,
  Input,
  Button,
  chakra,
  useRadioGroup,
} from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import exportAsImage from '../utils/exportAsImage'
import RadioCard from '../componets/RadioCard'
import qr from '../assets/qr.jpeg'
import logo from '../assets/logo.png'

import { postAtom } from '../store/JotaiStore'
import { useAtom } from 'jotai'
import { format, parseISO } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default function Poster() {
  const exportRef = useRef()
  const [post] = useAtom(postAtom)

  const [currentTime, setCurrentTime] = useState(Date.now())
  const [time, setTime] = useState('')

  useEffect(() => {
    getTime()
  }, [time])

  const getTime = () => {
    const timeID = setInterval(() => {
      setCurrentTime(Date.now())
      const result = format(currentTime, 'MM.dd hh:mm:ss EEE', { locale: zhCN })
      setTime(result)
      clearInterval(timeID)
    }, 1000)
  }

  const themes = {
    明白: { bg: '#fefdfe', fg: '#ea4f44' },
    暗黑: { bg: '#1b1c20', fg: '#edd9b3' },
  }

  return (
    <VStack className='parent'>
      <chakra.div boxShadow={'0 0 20px rgba(255,0,0,0.2) '}>
        <chakra.div ref={exportRef}>
          <Container
            bg={themes[post.theme].bg}
            w={'md'}
            color={themes[post.theme].fg}
            p={4}
            borderRadius={10}
            pos={'relative'}
          >
            <Center w={'full'} h={20}>
              <Image src={logo} />
            </Center>
            <Divider color={'red.200'} mt={2} mb={5} />
            <Text fontSize='sm' color={'gray.600'} align={'left'} mb={4}>
              {time}
            </Text>
            <Text fontSize='2xl' fontWeight='extrabold' align={'left'} mb={2}>
              {post.title}
            </Text>
            <Text fontSize='xl' fontWeight='bold' lineHeight={2}>
              {post.content}
            </Text>
            <Divider color={'red.200'} mt={10} mb={5} />
            <HStack w={'full'} h={20}>
              <Box>
                <Text fontSize='base' fontWeight='extrabold' align={'left'}>
                  {post.slogan}
                </Text>
                <Text fontSize='base' align={'left'}>
                  识别二维码，获取更多体验
                </Text>
              </Box>
              <Spacer />
              <Image src={qr} boxSize='60px' />
            </HStack>
          </Container>
        </chakra.div>
      </chakra.div>
      <Button onClick={() => exportAsImage(exportRef.current, 'test')}>截图下载</Button>
    </VStack>
  )
}
