import React from 'react';
import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';

export default function Card({
  title,
  date,
  image,
  description,
  order,
  link,
  icons,
}) {
  return (
    <Flex
      w='100%'
      my={7}
      h={{ base: 'auto', md: '60vh' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box
        w={{ base: '100%', md: '50%' }}
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
          <Text px={10} textAlign='center'>
            {description}
          </Text>
        </Box>

        <Box>
          {!link.demo ? (
            <span></span>
          ) : (
            <Link
              href={link.demo}
              color='white'
              isExternal
              bgGradient='linear(to-r,#B24592,#F15F79)'
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
            bgGradient='linear(to-r,#B24592,#F15F79)'
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
          <Text fontWeight='500'>Tecnologías</Text>
          <div style={{ textAlign: 'center' }}>
            {icons.map((icon) => {
              return (
                <i
                  className={`bx bxl-${icon}`}
                  key={icon}
                  style={{ fontSize: '1.3rem' }}
                ></i>
              );
            })}
          </div>
        </Box>
      </Box>
      <Box
        w={{ base: '100%', md: '50%' }}
        bgGradient='linear(to-r,#B24592,#F15F79)'
        order={{ base: '-1', md: order ? '-1' : '1' }}
      >
        <Text
          textAlign={{ base: 'end', md: order ? 'start' : 'end' }}
          fontWeight='500'
          color='white'
          p={3}
        >
          {date}
        </Text>
        <Box display='flex' h='80%' alignItems='center' justifyContent='center'>
          <Image src={image} alt={title} h='160' />
        </Box>
      </Box>
    </Flex>
  );
}
