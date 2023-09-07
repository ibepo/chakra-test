import React from 'react'
import {
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  chakra,
  Center,
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { MdBorderColor } from 'react-icons/md'

export default function Menu({ isOpen, onOpen, onClose }) {
  const menu = [
    { node: 1, pnode: 0, label: '价格' },
    { node: 2, pnode: 0, label: '供需' },
    { node: 3, pnode: 0, label: '库存' },
    { node: 4, pnode: 0, label: '利润' },
    { node: 5, pnode: 0, label: '华东' },
    { node: null, pnode: 1, label: '价格' },
    { node: null, pnode: 1, label: '指数' },
    { node: null, pnode: 1, label: '南北价差' },
    { node: null, pnode: 1, label: '坯差' },
    { node: null, pnode: 1, label: '基差' },
    { node: null, pnode: 2, label: '型钢日成交量' },
    { node: null, pnode: 2, label: '需求量' },
    { node: null, pnode: 2, label: '投放量' },
    { node: null, pnode: 2, label: '高炉开功率' },
    { node: null, pnode: 3, label: '唐山小样本' },
    { node: null, pnode: 3, label: '唐山库存' },
    { node: null, pnode: 3, label: '江阴' },
    { node: null, pnode: 3, label: '全国库存' },
    { node: null, pnode: 4, label: '成本' },
    { node: null, pnode: 4, label: '利润' },
    { node: null, pnode: 4, label: '趋势' },
    { node: null, pnode: 5, label: '调坯成品库存' },
    { node: null, pnode: 5, label: '调坯原料库存' },
    { node: null, pnode: 5, label: '产品调坯企业开工' },
    { node: null, pnode: 5, label: '条数调坯企业开工' },
  ]
  return (
    <Center>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        size={'full'}
        placement={'bottom'}
      >
        <DrawerOverlay bg={'blackAlpha.200'} />
        <DrawerContent p={'25px'} bg={'blackAlpha.500'}>
          <DrawerBody
            bg={'white'}
            borderRadius={'base'}
            // bgGradient='radial(gray.300, yellow.400, pink.200)'
          >
            <Text fontSize='3xl' fontWeight={'extrabold'} mt={'10px'}>
              功能直达
            </Text>
            <List>
              {menu
                .filter((i) => i.node != null)
                .map((item) => (
                  <ListItem mt={'10px'}>
                    <chakra.details cursor={'pointer'}>
                      <chakra.summary
                        display={'block'}
                        fontSize={'xl'}
                        color={'gray.800'}
                        py={'2px'}
                      >
                        {item.label}
                      </chakra.summary>
                      <List>
                        {menu
                          .filter((i) => i.pnode == item.node)
                          .map((item, index) => (
                            <ListItem
                              ml={'30px'}
                              pos={'relative'}
                              // _hover={{
                              //   bg: 'blue.400',
                              //   opacity: '300',
                              // }}
                              _before={{
                                content: '""',
                                position: 'absolute',
                                top: '0px',
                                left: '-15px',
                                width: '8px',
                                height: '1em',
                                borderLeft: '2px',
                                borderBottom: '2px',
                                borderBottomLeftRadius: '5px',
                                borderColor: 'gray.400',
                              }}
                              _after={{
                                content: '""',
                                position: 'absolute',
                                bottom: '0px',
                                left: '-15px',
                                borderLeft: '2px',
                                borderColor: 'gray.400',
                                h: '100%',
                              }}
                              _last={{
                                _after: {
                                  display: 'none',
                                },
                              }}
                            >
                              <Box
                                fontSize={'base'}
                                color={'gray.600'}
                                pb={'10px'}
                              >
                                {item.label}
                              </Box>
                            </ListItem>
                          ))}
                      </List>
                    </chakra.details>
                  </ListItem>
                ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Center>
  )
}
