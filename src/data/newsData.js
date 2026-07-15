import { img } from '../utils/imagePath';

// Reunion slideshow — first slide is intro text, rest are photos
export const reunionSlides = [
  {
    id: 1,
    type: 'intro',
    title: 'Reunion & Meetups',
    text: '[ Patrick: opening paragraph introducing the reunion and meetup moments captured here. ]',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/news/reunion1.jpg',
    caption: '[ caption ]',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/news/reunion2.jpg',
    caption: '[ caption ]',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/news/reunion3.jpg',
    caption: '[ caption ]',
  },
  // Add more reunion/meetup photos here
];

// Memorial — names and relation to alumni member
export const memorialEntries = [
  {
    id: 1,
    name: '[ Full Name ]',
    relation: '[ e.g. Father of Kofi Mensah ]',
    note: '[ Optional short remembrance line ]',
  },
  {
    id: 2,
    name: '[ Full Name ]',
    relation: '[ e.g. Wife of James Adu ]',
    note: '',
  },
  {
    id: 3,
    name: '[ Full Name ]',
    relation: '[ e.g. Alumni Member ]',
    note: '',
  },
];

// High achievers
export const achievers = [
  {
    id: 1,
    name: '[ Achiever Name ]',
    photo: '/images/news/achiever1.jpg',
    caption: '[ Achievement description or title ]',
  },
  {
    id: 2,
    name: '[ Achiever Name ]',
    photo: '/images/news/achiever2.jpg',
    caption: '[ Achievement description or title ]',
  },
];