import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';
export default function Footer() {
  const { colorMode } = useColorMode();
  let bgColor = colorMode === 'light' ? 'gray.800' : 'white';
  let color = colorMode === 'light' ? 'white' : 'black';
  return (
    <Box textAlign='center' bgColor={bgColor} py={1}>
      <Text color={color}>Hecho con 💙 por Facu Noriega</Text>
    </Box>
  );
}
