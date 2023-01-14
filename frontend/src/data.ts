import { Service } from './app/shared/models/Service';

export const sample_services: Service[] = [
  {
    id:'1',
    name: 'WordPress',
    time: '01',
    price: 50,
    favorite: false,
    origins: ['Sri Lanka'],
    stars: 4.5,
    imageUrl: 'assets/5.jpg',
    tags: ['wordpress', 'web development'],
  },
  {
    id:'2',
    name: 'Web Development',
    price: 20,
    time: '02',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/3.jpg',
    tags: ['wordpress', 'website'],
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    time: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/4.jpg',
    tags: ['wordpress', 'website'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    time: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/5.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    time: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/6.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 9,
    time: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/7.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]
