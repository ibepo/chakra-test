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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Button,
  useDisclosure,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  useToast,
  chakra,
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import Forecast from './componets/Forecast'
import ShortMessage from './componets/ShortMessage'
import Animate from './componets/Animate'
import Refresh from './componets/Refresh'
import Audio from './componets/Audio'
import NationWideprice from './componets/NationWideprice'
import Chart from './componets/Chart'
import Menu from './componets/Menu'
import Tree from './componets/Tree'
import Tree2 from './componets/Tree2'
import Draw from './componets/Draw'
import Flow from './componets/Flow'
import Gen from './view/Gen'

function App() {
  return (
    <Center minH={'100vh'} bg={'rgb(250,250,250)'}>
      <Gen />
    </Center>
    // <Flex>
    //   <Center maxW={'md'} p={4}>
    //     <Container maxW='md'>
    //       <Chart mt={'1'} />
    //       <NationWideprice />
    //     </Container>
    //   </Center>
    //   <Center flex={'1'}>
    //     <Gen />
    //   </Center>
    // </Flex>
  )
}

export default App
