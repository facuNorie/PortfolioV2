import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import Title from '../Title';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_un2qk2s',
        'template_0co3flf',
        e.target,
        'user_0BQv9KFMLFKuvCBz1WpFJ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <article id='contact' style={{ marginTop: '200px', height: '100vh' }}>
      <Box textAlign='center'>
        <Title title='Contact' colorA='#d12c2c' colorB='#414f9e' />
      </Box>
      <Box>
        <form onSubmit={sendEmail}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' name='name' />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' name='email' />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Input type='text' name='message' />
          </FormControl>
          <Button type='submit' bgColor='whatsapp.500'>
            Submit
          </Button>
        </form>
      </Box>
    </article>
  );
}
