import { MdStar } from 'react-icons/md'
export default Card = () => {
  return (
    <Box
      p='5'
      w='320px'
      borderColor='black.300'
      borderWidth='1px'
      flexShrink={0}
    >
      <Image borderRadius='md' src='https://bit.ly/2k1H1t6' />
      <Flex align='baseline' mt={2}>
        <Badge colorScheme='orange'>Vip</Badge>
        <Text
          ml={2}
          textTransform='uppercase'
          fontSize='sm'
          fontWeight='bold'
          color='pink.800'
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>
        Modern, Chic Penthouse with Mountain, City & Sea Views
      </Text>
      <Text mt={2}>$119/night</Text>
      <Flex mt={2} align='center'>
        <Box as={MdStar} color='orange.400' />
        <Text ml={1} fontSize='sm'>
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  )
}
