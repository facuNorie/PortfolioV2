import imageTodolist from '../assets/projectTodolist.png'
import imageContactbook from '../assets/projectContactbook.png'
import imageSuperhero from '../assets/projectSuperhero.png'
import imageTrivia from '../assets/projectTriviagame.png'
import imageCalculadora from '../assets/projectCalculadora.png'

const allProjects = [
  {
    id: 1,
    title: 'Agenda de contactos',
    image: imageContactbook,
    description:
      'Aplicación web que simula ser la típica herramienta que almacena y gestiona nuestros contactos. Aquí podremos establecer nuestro usuario y contraseña para luego poder crear los respectivos contactos. Tanto el registro, como los contactos se almacenan en una base de datos.',
    link: {
      repo: 'https://github.com/facuNorie/Agenda-de-contactos',
      demo: 'https://fb-firestore-9a351.web.app/',
    },
    date: '28 Abr 2021',

    icons: ['react', 'firebase'],
  },
  {
    id: 2,
    title: 'Trivia game',
    image: imageTrivia,
    description:
      'Mini juego de preguntas y respuestas (multiple-choice), consiste en un total de 10 preguntas, irán pasando una por una tratando de acertar la opción correcta para sumar la mayor cantidad de puntos.',
    link: {
      repo: 'https://github.com/facuNorie/trivia-game',
      demo: 'https://trivia-game-zeta.vercel.app/',
    },
    date: '10 Feb 2022',
    order: true,
    icons: ['react'],
  },
  {
    id: 3,
    title: 'Superhero team',
    image: imageSuperhero,
    description:
      'Web donde podemos buscar entre más de 300 héroes y crear nuestro propio equipo 100% personalizado!. Una vez creado el equipo podremos ver las estadísticas no solo de cada uno de los héroes sino que también del equipo completo.',
    link: {
      repo: 'https://github.com/facuNorie/SuperHero-Alkemy',
      demo: 'https://deploy-superhero.vercel.app/',
    },
    date: '14 Ago 2021',
    icons: ['react', 'redux', 'bootstrap'],
  },
  {
    id: 4,
    title: 'Calculadora',
    image: imageCalculadora,
    description: 'Calculadora básica, con dark mode',
    link: {
      repo: 'https://github.com/facuNorie/Calculadora',
      demo: 'https://facunorie.github.io/Calculadora/',
    },
    date: '17 Feb 2021',
    order: true,
    icons: ['html5', 'sass', 'javascript'],
  },
]

export default allProjects
