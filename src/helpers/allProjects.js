import imageTodolist from '../assets/projectTodolist.png';
import imageContactbook from '../assets/projectContactbook.png';
import imageSuperhero from '../assets/projectSuperhero.png';

const allProjects = [
  {
    id: 1,
    title: 'Contact book',
    image: imageContactbook,
    description: 'adipisicing elit.',
    link: {
      repo: 'https://github.com/facuNorie/Agenda-de-contactos',
    },
    date: '6 Oct 2020',
  },
  {
    id: 2,
    title: 'Superhero team',
    image: imageSuperhero,
    description:
      'adipisicing eia odit accusantium ab vel aut ea istereiciendis, beatae ex modi Lorem ipsum, dolor sit amet consecteturadipisicing elit. Voluptatibus ratione quod quis sint esse iure liberonemo quaerat, repudiandae rerum, repellat quia numquam dolorum odionostrum distinctio tempora eaque quo',
    link: {
      repo: 'https://github.com/facuNorie/SuperHero-Alkemy',
    },
    date: '12 Nov 2020',
    order: true,
  },
  {
    id: 3,
    title: 'Todo list',
    image: imageTodolist,
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
