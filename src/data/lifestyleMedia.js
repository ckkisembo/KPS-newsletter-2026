// type: 'image' or 'video'
// src: file path or URL — leave empty string while pending
// caption: shown as overlay on real images, as placeholder text otherwise

const lifestyleMedia = [
  { id: 1, type: 'image', src: '/images/lifestyle/wellness1.jpg', caption: 'Wellness & Health' },
  { id: 2, type: 'image', src: '/images/lifestyle/activity_ladies.jpg', caption: 'Keeping Active' },
  { id: 3, type: 'image', src: '/images/lifestyle/wellness3.jpg', caption: 'Group Activities' },
  { id: 4, type: 'image', src: '/images/lifestyle/wellness4.jpg', caption: 'Mind & Body' },
  { id: 5, type: 'image', src: '/images/lifestyle/golf1.jpg',     caption: 'On the Green' },
  { id: 6, type: 'image', src: '/images/lifestyle/golf2.jpg',     caption: 'Golf Meetup' },
  { id: 7, type: 'image', src: '/images/lifestyle/golf3.jpg',     caption: 'The Back Nine' },
  // When video is ready, add it like this:
  // { id: 8, type: 'video', src: '/images/lifestyle/highlight.mp4', caption: 'Group Highlights' },
];

export default lifestyleMedia;