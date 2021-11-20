import React, { useState } from 'react';
import {
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useColorMode,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Links from './links';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navbar, setNavbar] = useState(false);
  let bgLogo = colorMode === 'light' ? 'black' : 'white';
  let clLogo = colorMode === 'light' ? 'white' : 'black';

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <nav
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'fixed',
        top: '0',
        zIndex: '99',
        backdropFilter: 'saturate(120%) blur(5px)',
        transition: 'all .2s',
        boxShadow: navbar && '0px 1px 5px 0px rgba(150, 150, 150, 0.41)',
      }}
    >
      <Box
        display='flex'
        py={5}
        justifyContent='space-around'
        alignItems='center' /* end */
      >
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
          <Box display={{ base: 'none', md: 'flex' }}>
            <Links />
          </Box>
        </div>
        {/* Languaje & darkMode */}
        <Box display={{ base: 'none', md: 'flex' }} alignItems='center'>
          {/* Later...  <img src='https://img.icons8.com/color/25/000000/great-britain-circular.png' />
          <img src='https://img.icons8.com/color/25/000000/spain-circular.png' /> */}
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
        <Box display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onOpen}
            fontSize='20px'
            icon={<i className='bx bx-menu'></i>}
          />
          <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                borderBottomWidth='1px'
                display='flex'
                alignItems='end'
              >
                <Box
                  bg={bgLogo}
                  color={clLogo}
                  pr={1}
                  pl={4}
                  pt={3}
                  mr={1}
                  boxShadow='lg'
                  transition='all .5s'
                  userSelect='none'
                >
                  <strong>fN</strong>
                </Box>
                <Text
                  fontWeight='bold'
                  fontSize='2xl'
                  flexGrow='1'
                  userSelect='none'
                >
                  facuNorie
                </Text>
                <Box>
                  <IconButton
                    onClick={onClose}
                    fontSize='20px'
                    icon={<i className='bx bx-x'></i>}
                  />
                </Box>
              </DrawerHeader>
              <DrawerBody
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
              >
                <Box display='flex' flexDirection='column'>
                  <Links drawer='true' />
                </Box>
                <Box display='flex' justifyContent='space-between' mb={20}>
                  <Box display='flex'></Box>
                  <i
                    className={`bx bx-${
                      colorMode === 'light' ? 'moon' : 'sun'
                    }`}
                    onClick={toggleColorMode}
                    style={{
                      fontSize: '1.5rem',
                      marginLeft: '2rem',
                      cursor: 'pointer',
                    }}
                  ></i>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </nav>
  );
}
