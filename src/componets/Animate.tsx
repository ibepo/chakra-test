import React from 'react'
import { motion } from 'framer-motion'
import { Box, Stack } from '@chakra-ui/react'
export default function Animate() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Box bg='tomato' w='20' h='20' p={4} color='white'>
        123
      </Box>
    </motion.div>
  )
}
