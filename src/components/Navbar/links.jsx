import React from 'react'
import { Link } from '@chakra-ui/react'

export default function Links({ drawer }) {
  return (
    <>
      <Link href='/#home' py={drawer && 2} my={drawer && 4} fontSize='1.1rem'>
        Inicio
      </Link>
      <Link
        ml={!drawer && '20px'}
        href='/#about'
        py={drawer && 2}
        my={drawer && 4}
        fontSize='1.1rem'
      >
        Sobre mí
      </Link>
      <Link
        ml={!drawer && '20px'}
        href='/#projects'
        py={drawer && 2}
        my={drawer && 4}
        fontSize='1.1rem'
      >
        Portfolio
      </Link>
      <Link
        ml={!drawer && '20px'}
        href='/#skills'
        py={drawer && 2}
        my={drawer && 4}
        fontSize='1.1rem'
      >
        Tecnologías
      </Link>
      <Link
        ml={!drawer && '20px'}
        href='/#contact'
        py={drawer && 2}
        my={drawer && 4}
        fontSize='1.1rem'
      >
        Contacto
      </Link>
    </>
  )
}
