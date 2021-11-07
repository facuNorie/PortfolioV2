import React from 'react';
import { Box, Text, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function index() {
  const { colorMode, toggleColorMode } = useColorMode();
  let bgLogo = colorMode === 'light' ? 'black' : 'white';
  let clLogo = colorMode === 'light' ? 'white' : 'black';

  return (
    <nav>
      <Box display='flex' py={5} justifyContent='space-around' alignItems='end'>
        {/* Logo */}
        <Link to='/' style={{ userSelect: 'none' }}>
          <Box display='flex'>
            <Box
              bg={bgLogo}
              color={clLogo}
              pr={1}
              pl={4}
              pt={3}
              mr={1}
              boxShadow='lg'
              transition='all .5s'
            >
              <strong>fN</strong>
            </Box>
            <Text fontWeight='bold' fontSize='2xl'>
              facuNorie
            </Text>
          </Box>
        </Link>
        {/* Links */}
        <div>
          <Box display='flex'>
            <Text px={1}>Home</Text>
            <Text px={1}>About</Text>
            <Text px={1}>Projects</Text>
            <Text px={1}>Skills</Text>
          </Box>
        </div>
        {/* Languaje & darkMode */}
        <Box display='flex' alignItems='center'>
          <img src='https://img.icons8.com/color/25/000000/great-britain-circular.png' />
          <img src='https://img.icons8.com/color/25/000000/spain-circular.png' />
          <i
            className={`bx bx-${colorMode === 'light' ? 'moon' : 'sun'}`}
            onClick={toggleColorMode}
            style={{
              fontSize: '1.5rem',
              marginLeft: '2rem',
              cursor: 'pointer',
            }}
          ></i>
        </Box>
      </Box>
    </nav>
  );
}
