import imageTodolist from '../assets/projectTodolist.png';
import imageContactbook from '../assets/projectContactbook.png';
import imageSuperhero from '../assets/projectSuperhero.png';

const allProjects = [
  {
    id: 1,
    title: 'Superhero team',
    image: imageSuperhero,
    description:
      'Web donde podemos buscar entre más de 300 héroes y crear nuestro propio equipo 100% personalizado!. Una vez creado el equipo podremos ver las estadísticas no solo de cada uno de los héroes sino que también del equipo completo.',
    link: {
      repo: 'https://github.com/facuNorie/SuperHero-Alkemy',
    },
    date: '14 Ago 2021',
    icons: `           <i className='bx bxl-react'></i>
    <i className='bx bxl-redux'></i>
    <i className='bx bxl-bootstrap'></i>`,
  },
  {
    id: 2,
    title: 'Agenda de contactos',
    image: imageContactbook,
    description:
      'Aplicación web que simula ser la típica herramienta que almacena y gestiona nuestros contactos. Aquí podremos establecer nuestro usuario y contraseña para luego poder crear los respectivos contactos. Tanto el registro, como los contactos se almacenan en una base de datos.',
    link: {
      repo: 'https://github.com/facuNorie/Agenda-de-contactos',
    },
    date: '28 Abr 2021',
    order: true,
  },
  {
    id: 3,
    title: 'To-do list',
    image: imageTodolist,
    description:
      'Lista de quehaceres digital, donde tenemos opciones para crear, editar, leer y eliminar cada quehacer de nuestra lista.',
    link: {
      repo: 'https://github.com/facuNorie/Todo-App',
      demo: 'https://facunorie.github.io/Todo-App/',
    },
    date: '30 Mar 2021',
  },
];

export default allProjects;
