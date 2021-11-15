import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';
export default function Footer() {
  const { colorMode } = useColorMode();
  let bgColor = colorMode === 'light' ? 'black' : 'whiteAlpha.800';
  let color = colorMode === 'light' ? 'white' : 'black';
  return (
    <Box textAlign='center' bgColor={bgColor} py={2}>
      <Text color={color}>Hecho con 💙 por Facu Noriega</Text>
    </Box>
  );
}
