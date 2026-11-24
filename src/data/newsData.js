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
    src: img('/images/reunion/hanging_out.png'),
    caption: '[ night on the town ]',
  },
  {
    id: 3,
    type: 'image',
    src: img('/images/reunion/catchingup.png'),
    caption: '[ catching up ]',
  },
  {
    id: 4,
    type: 'image',
    src: img('/images/reunion/chance_meetups.png'),
    caption: '[ unplanned encounters ]',
  },
  {
    id: 5,
    type: 'image',
    src: img('/images/reunion/ladies_meetup_3.jpg'),
    caption: '[ mini ladies reunion ]',
  },
  {
    id: 6,
    type: 'image',
    src: img('/images/reunion/ishaazi_meetups.png'),
    caption: '[ ishaazi meetups ]',
  },
  // Add more reunion/meetup photos here
  {
    id: 7,
    type: 'image',
    src: img('/images/reunion/bse_why_not.png'),
    caption: '[ just because ]',
  },
  {
    id: 8,
    type: 'image',
    src: img('/images/reunion/annet_barbs.jpg'),
    caption: '[ birthday things ]',
  },
];

// Memorial — names and relation to alumni member
export const memorialEntries = [
  {
    id: 1,
    name: '[ Francis Xavier Rwego]',
    relation: '[ Father of Leonard Rwego ]',
    // note: '[ Optional short remembrance line ]',
  },
  {
    id: 2,
    name: '[ AbWooli Elizabeth Kaijabwango ]',
    relation: '[ Mother of Sylvia Kaijabwango ]',
    // note: '',
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
    photo: img('/images/news/achiever1.jpg'),
    caption: '[ Achievement description or title ]',
  },
  {
    id: 2,
    name: '[ Achiever Name ]',
    photo: img('/images/news/achiever2.jpg'),
    caption: '[ Achievement description or title ]',
  },
];