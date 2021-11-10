import React from 'react';
import { Box, Text, Button, useColorMode, Flex, Link } from '@chakra-ui/react';

export default function Card({ title, date, image, description, order, link }) {
  const { colorMode } = useColorMode();
  let bgCard = colorMode === 'dark' ? 'black' : 'white';
  return (
    <Flex w='100%' my={7} h='60vh'>
      <Box
        w='50%'
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
        alignItems='center'
        boxShadow='dark-lg'
      >
        <Box>
          <Text fontSize='3xl' textAlign='center'>
            {title}
          </Text>
          <Text px={10}>{description}</Text>
        </Box>

        <Box>
          {!link.demo ? (
            <span></span>
          ) : (
            <Link
              href={link.demo}
              color='white'
              isExternal
              bgGradient='linear(to-r,#f0488e,#5D26C1)'
              px={2}
              py={1}
              mx={2}
              rounded='md'
              boxShadow='md'
              _hover={{
                textDecoration: 'none',
              }}
            >
              Demo
            </Link>
          )}
          <Link
            href={link.repo}
            color='white'
            isExternal
            bgGradient='linear(to-r,#f0488e,#5D26C1)'
            px={2}
            py={1}
            mx={2}
            rounded='md'
            boxShadow='md'
            _hover={{
              textDecoration: 'none',
            }}
          >
            Repo
          </Link>
        </Box>
        <Box>
          <Text fontWeight='500'>Built with</Text>
          <div style={{ textAlign: 'center' }}>
            <i className='bx bxl-react'></i>
            <i className='bx bxl-firebase'></i>
          </div>
        </Box>
      </Box>
      <Box
        w='50%'
        bgGradient='linear(to-r,#B24592,#F15F79)'
        order={order ? '-1' : '1'}
      >
        <Text
          textAlign={order ? 'start' : 'end'}
          fontWeight='500'
          color='white'
          p={3}
        >
          {date}
        </Text>
      </Box>
    </Flex>
  );
}
