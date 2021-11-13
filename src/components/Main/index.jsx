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
              fontSize='6xl' /* Quiza 7xl */
              fontWeight='900'
              textAlign='end'
            >
              Desarrollador Frontend
            </Text>
            <Text fontSize='6xl' fontWeight='900' textAlign='end'>
              Facu Noriega
            </Text>
            <Text fontSize='1xl' textAlign='end' fontWeight='500'>
              <i className='bx bxs-map' style={{ marginRight: '5px' }}></i>
              Buenos Aires, Argentina
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
    </main>
  );
}
