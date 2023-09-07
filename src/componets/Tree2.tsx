import React from 'react'
import {
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  chakra,
  Center,
} from '@chakra-ui/react'
import useSWR from 'swr'

// 基准价地图
export default function Tree2() {
  const url = `http://114.113.152.67:9595/business/cyw/openapi/getProductTreeList.json?_=1691985411128`
  const fetcher = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const { data, error, isLoading } = useSWR('tree', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <Center>
      <List>
        {data.data?.map((item) => (
          <ListItem mt={'10px'}>
            <Text fontSize={'2xl'}>{item.productName}</Text>
            <List>
              {item.childList.length > 0 &&
                item.childList.map((item) => (
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
                    {item.productName}
                    <List>
                      {item.childList.length > 0 &&
                        item.childList.map((item) => (
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
                            {item.productName}
                          </ListItem>
                        ))}
                    </List>
                  </ListItem>
                ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Center>
  )
}
