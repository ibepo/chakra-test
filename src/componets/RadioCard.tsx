import React from 'react'
import { Box, chakra, Radio, RadioGroup, useRadio, useToast } from '@chakra-ui/react'
export default function RadioCard(props) {
  const { color, ...radioProps } = props
  const { getInputProps, getRadioProps, state, htmlProps, getLabelProps } = useRadio(radioProps)
  const toast = useToast()

  return (
    <Box as='label' {...htmlProps}>
      <chakra.input {...getInputProps({})} hidden />
      <Box
        {...getRadioProps({})}
        cursor='pointer'
        boxSize={'10'}
        borderRadius='full'
        boxShadow='md'
        // bg={state.isChecked ? 'green.200' : 'transparent'}
        bg={color}
        _checked={{
          borderWidth: '2px',
          borderColor: 'green.800',
          boxShadow: 'outline',
        }}
        px={2}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}
