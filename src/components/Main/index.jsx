import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import mainPicture from '../../assets/mainPicture.png';

export default function Main() {
  return (
    <Box>
      <Flex px={5} direction={['column', 'column', 'row', 'row']}>
        <Box w='100%' h='80vh'>
          <Box display='flex' flexDir='column' h='100%' justifyContent='center'>
            <Text
              fontSize='6xl' /* Quiza 7xl */
              fontWeight='900'
              textAlign='center'
            >
              Frontend Developer
            </Text>
            <Text fontSize='6xl' fontWeight='900' textAlign='center'>
              Facu Noriega
            </Text>
          </Box>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          w='100%'
        >
          <Image
            boxSize='350px'
            objectFit='cover'
            src={mainPicture}
            alt='Developer illustration'
          />
        </Box>
      </Flex>
    </Box>
  );
}
