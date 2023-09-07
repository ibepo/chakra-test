import React from 'react'

export default Header = () => {
  return (
    <Center
      w='100vw'
      h={14}
      top={0}
      left={0}
      position='sticky'
      bgColor='black'
      textColor='yellow'
      fontSize='xl'
      zIndex={1000}
    >
      <Text>一般操作</Text>
    </Center>
  )
}
