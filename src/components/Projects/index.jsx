import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Card from '../Cards';
import allProjects from '../../helpers/allProjects';
import Title from '../Title';

export default function Projects() {
  return (
    <article id='projects' style={{ marginTop: '200px' }}>
      <Box textAlign='center'>
        <Title title='Projects' colorA='#24C6DC' colorB='#514A9D' />
      </Box>
      <Box px='20' mt={20}>
        {allProjects?.map(
          ({ id, title, image, date, description, order, link }) => {
            return (
              <Card
                key={id}
                title={title}
                date={date}
                image={image}
                description={description}
                order={order}
                link={link}
              />
            );
          }
        )}
      </Box>
    </article>
  );
}
