import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import mainPicture from '../../assets/mainPicture.png';

export default function Main() {
  return (
    <main id='home' style={{ paddingTop: '160px' }}>
      <Flex px={5} direction={['column', 'column', 'row', 'row']}>
        <Box w='100%'>
          <Box display='flex' flexDir='column' h='100%' justifyContent='center'>
            <Text
              fontSize={{ base: '5xl', md: '6xl' }}
              fontWeight='900'
              textAlign='end'
            >
              Desarrollador Frontend
            </Text>
            <Text
              fontSize={{ base: '4xl', md: '5xl' }}
              fontWeight='900'
              textAlign='end'
            >
              Facu Noriega
            </Text>
            <Text fontSize='1xl' textAlign='end' fontWeight='500'>
              <i className='bx bxs-map' style={{ marginRight: '5px' }}></i>
              Buenos Aires, Argentina
            </Text>
          </Box>
        </Box>
        <Box
          marginTop={{ base: '50px', md: '0' }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          w='100%'
        >
          <Image
            boxSize={{ base: '300px', md: '350px' }}
            objectFit='cover'
            src={mainPicture}
            alt='Developer illustration'
          />
        </Box>
      </Flex>
    </main>
  );
}
