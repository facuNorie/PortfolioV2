import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import profilePicture from '../../assets/profilePicture.png';
import { Link } from 'react-router-dom';
import Title from '../Title';

export default function About() {
  return (
    <article id='about' style={{ paddingTop: '200px' }}>
      <Box textAlign='center'>
        <Title title='Sobre mí' colorA='#cc2b5e' colorB='#753a88' />
      </Box>
      <Flex
        mt={20}
        direction={['column', 'column', 'row', 'row']}
        h={{ base: 'auto', md: '300' }}
      >
        <Box w='100%' px={10}>
          <Text fontSize='1.1rem' lineHeight='2rem'>
            Hola! Me llamo Facundo Leonel Noriega Barros, tengo 18 años y vivo
            en la provincia de Buenos Aires, Argentina &#x1f1e6;&#x1f1f7;.
            <br />
            Soy Técnico informático, y actualmente me encuentro estudiando el
            primer año de la carrera "Licenciatura en sistemas de la
            información".
            <br />
            Hace casi 2 años comencé a estudiar sobre el mundo de la
            programación por mi cuenta y poco a poco he ido adquiriendo diversas
            habilidades y desarrollado distintos proyectos como para hoy en dia
            considerarme desarrollador frontend, así y todo el mundo IT se
            renueva constantemente y es por ello que sigo en constante
            aprendizaje.
          </Text>
        </Box>
        <Box
          w='100%'
          px={10}
          order={{ base: '-1', md: '1' }}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box
            bgGradient='linear(to-r, #1488CC, #2B32B2)'
            w='250px'
            h='250px'
            position='relative'
          >
            <Image
              src={profilePicture}
              alt='Profile picture'
              position='absolute'
              right='1em'
              bottom='1em'
              /* style={{ filter: 'grayscale(100%)' }} */
            />
          </Box>
          <Box>
            <Link to='/cv' style={{ margin: ' 1rem' }}>
              <i className='bx bxs-file-pdf' style={{ fontSize: '2rem' }}></i>
            </Link>
            <a
              href='https://github.com/facuNorie'
              target='_blank'
              style={{ margin: '1rem' }}
            >
              <i className='bx bxl-github' style={{ fontSize: '2rem' }}></i>
            </a>
            <a
              href='https://www.linkedin.com/in/facunorie/'
              target='_blank'
              style={{ margin: ' 1rem' }}
            >
              <i
                className='bx bxl-linkedin-square'
                style={{ fontSize: '2rem' }}
              ></i>
            </a>
            <a
              href='https://www.instagram.com/facunorie/'
              target='_blank'
              style={{ margin: ' 1rem' }}
            >
              <i className='bx bxl-instagram' style={{ fontSize: '2rem' }}></i>
            </a>
          </Box>
        </Box>
      </Flex>
    </article>
  );
}
