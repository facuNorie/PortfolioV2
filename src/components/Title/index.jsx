import React from 'react'
import { Text } from '@chakra-ui/react'

export default function Title({ title, colorA, colorB }) {
  return (
    <Text
      fontSize='5xl'
      fontWeight='bold'
      display='inline'
      style={{
        borderBottom: '3px solid',
        borderImage: `linear-gradient(to right, ${colorA}, ${colorB}, transparent,transparent) 1`,
      }}
    >
      {title}
    </Text>
  )
}
