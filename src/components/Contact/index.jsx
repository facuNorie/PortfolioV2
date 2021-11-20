import React from 'react';
import {
  Box,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  useToast,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import Title from '../Title';
import { SERVICE, TEMPLATE, USER } from '../../helpers/privateKeys';
import email from '../../assets/email.png';

export default function Contact() {
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_${SERVICE}`,
        `template_${TEMPLATE}`,
        e.target,
        `user_${USER}`
      )
      .then(
        (result) => {
          result.text === 'OK' &&
            toast({
              title: 'Mensaje enviado.',
              position: 'top-right',
              description: 'Tu mensaje ha sido enviado exitosamente',
              status: 'success',
              duration: 2000,
              isClosable: true,
            });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <article
      id='contact'
      style={{ paddingTop: '200px', paddingBottom: '150px' }}
    >
      <Box textAlign='center'>
        <Title title='Contacto' colorA='#d12c2c' colorB='#414f9e' />
      </Box>
      <Flex
        justify='space-evenly'
        align='center'
        mt={15}
        direction={['column', 'column', 'row', 'row']}
      >
        <Box w={{ base: '80%', md: '35%' }}>
          <form onSubmit={sendEmail}>
            <FormControl mb={3}>
              <FormLabel>Nombre</FormLabel>
              <Input type='text' name='name' autoComplete='off' required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Email</FormLabel>
              <Input type='email' name='email' autoComplete='off' required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Mensaje</FormLabel>
              <Textarea type='text' name='message' resize='none' required />
            </FormControl>
            <div style={{ textAlign: 'center' }}>
              <Button
                type='submit'
                bgGradient='linear(to-r,#d12c2c,#414f9e)'
                color='white'
                boxShadow='2xl'
                _hover={{
                  backgroundColor: 'none',
                }}
              >
                Contactar
              </Button>
            </div>
          </form>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Image
            src={email}
            alt='Email contact picture'
            boxSize={{ base: '200px', md: '350px' }}
          />
          <Box>
            <Flex mb={2}>
              <i
                className='bx bxl-linkedin'
                style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
              ></i>
              <Text fontWeight='bold'>facuNorie</Text>
            </Flex>
            <Flex align='center'>
              <i
                className='bx bx-mail-send'
                style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
              ></i>
              <Text fontWeight='bold'>noriegafacundo08@gmail.com</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </article>
  );
}
