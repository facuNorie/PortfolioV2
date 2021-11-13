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
        <Box w='100%' px={10} textAlign='end'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
          officiis iure. Vero magnam ipsum facilis fugit odio assumenda atque
          mollitia. Repudiandae nobis placeat quis iste, esse expedita ullam non
          incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ducimus vero deserunt autem, dicta non distinctio hic aspernatur illum
          iste praesentium temporibus deleniti corr Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Accusamus, aut accusantium eligendi
          voluptas corrupti dolor sequi ipsa dignissimos animi quibusdam
          voluptatibus in voluptatem omnis optio culpa? Ab dolor mollitia omnis!
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
