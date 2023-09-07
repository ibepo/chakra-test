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

export default function Tree() {
  const url = `http://118.126.142.187:8089/ts-datamanager/newjcyj/api/menu/findMenuIncludeIndexByUserFormat?userId=F8A0FDD7272811F4E050A8C00E011B4C&token=F8A0FDD7272811F4E050A8C00E011B4C-493b989091e24c73b735bc47f6ee667f&type=L`
  const fetcher = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
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
            <Text fontSize={'2xl'}>{item.treeName}</Text>
            <List>
              {item.childs.length > 0 &&
                item.childs.map((item) => (
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
                    {item.treeName}
                    <List>
                      {item.childs.length > 0 &&
                        item.childs.map((item) => (
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
                            {item.treeName}
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
