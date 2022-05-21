import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import mainPicture from '../../assets/mainPicture.png'
import './style.css'

export default function Main() {
  return (
    <main id='home' style={{ paddingTop: '160px' }}>
      <Flex px={5} direction={['column', 'column', 'row', 'row']}>
        <Box w='100%'>
          <Box
            display='flex'
            flexDir='column'
            h='100%'
            justifyContent='center'
            alignItems='end'
          >
            <Text
              fontSize={{ base: '5xl', md: '6xl' }}
              fontWeight='900'
              letterSpacing='-.02em'
              className='animatedTitle'
              style={{
                '--content': '"Desarrollador"',
                '--startColor': '#007cf0',
                '--endColor': '#00dfd8',
                '--delay': '0s',
              }}
            >
              Desarrollador
            </Text>
            <Text
              fontSize={{ base: '5xl', md: '6xl' }}
              fontWeight='900'
              letterSpacing='-.02em'
              className='animatedTitle'
              style={{
                '--content': '"Frontend"',
                '--startColor': '#7928ca',
                '--endColor': '#ff0080',
                '--delay': '3.33s',
              }}
            >
              Frontend
            </Text>
            <Text
              fontSize={{ base: '4xl', md: '5xl' }}
              fontWeight='900'
              letterSpacing='-.04em'
              className='animatedTitle'
              style={{
                '--content': '"Facu Noriega"',
                '--startColor': '#ff4d4d',
                '--endColor': '#f9cb2b',
                '--delay': '6.66s',
              }}
            >
              Facu Noriega
            </Text>
            <Text
              fontSize='1xl'
              textAlign='end'
              fontWeight='500'
              letterSpacing='-.04em'
            >
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
  )
}
