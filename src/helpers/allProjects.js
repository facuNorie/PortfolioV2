import todoList from '../assets/todoList.jpg';
import contactBook from '../assets/agendaContactos.jpg';

const allProjects = [
  {
    id: 1,
    title: 'Contact book',
    image: contactBook,
    description: 'adipisicing elit.',
    link: {
      repo: 'https://github.com/facuNorie/Agenda-de-contactos',
    },
    date: '6 Oct 2020',
  },
  {
    id: 2,
    title: 'Image searcher',
    image: contactBook,
    description:
      'adipisicing eia odit accusantium ab vel aut ea istereiciendis, beatae ex modi Lorem ipsum, dolor sit amet consecteturadipisicing elit. Voluptatibus ratione quod quis sint esse iure liberonemo quaerat, repudiandae rerum, repellat quia numquam dolorum odionostrum distinctio tempora eaque quo',
    link: {
      repo: 'https://github.com/facuNorie/Unsplash',
      demo: 'https://facunorie.github.io/Unsplash/',
    },
    date: '12 Nov 2020',
    order: true,
  },
  {
    id: 3,
    title: 'Todo list',
    image: todoList,
    description:
      'adipisicing elit. Odio praesentiud quis sinllat quia numquam dolorum odionostrum distinctio tempora eaque quo',
    link: {
      repo: 'https://github.com/facuNorie/Todo-App',
      demo: 'https://facunorie.github.io/Todo-App/',
    },
    date: '21 Nov 2020',
  },
];

export default allProjects;
