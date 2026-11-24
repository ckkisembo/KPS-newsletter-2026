import { img } from '../utils/imagePath';

// ——— Golf Q&A spotlight ———
// Photos live in public/images/lifestyle/. They display at their natural shape (no cropping).
// 'alt' describes the photo for screen readers; 'caption' is shown under it (leave '' for none).
const spotlight = {
  kicker: 'Alumni Spotlight',
  headline: 'Meet Martha Kaganzi, Our Newest Golf Enthusiast',
  photos: [
    { src: img('/images/lifestyle/golfers/martha_golf_1.jpg'), alt: 'A golfer at the top of her swing on the tee', caption: 'Martha Swings' },
    { src: img('/images/lifestyle/golfers/martha_golf_2.jpg'), alt: 'Three women golfers posing together on the course', caption: 'Lady Golfers' },
  ],
  // Who wrote or conducted the interview. Fill these in and drop the photo into
  // public/images/lifestyle/ (while name/photo are empty, a placeholder card shows).
  author: {
    name: 'Charles Kazuka',
    role: 'Interviewer',
    photo: 'img("/images/lifestyle/golfers/author_golf")',   // e.g. img('/images/lifestyle/author-golf.jpg')
  },
  // Optional pull quote — taken word for word from Martha's answer to the advice question.
  // Delete the whole pullQuote line to remove it.
  pullQuote: {
    text: 'Golf is like life, has ups and downs. The good news is that there is always a better day.',
    who: 'Martha Kaganzi',
  },
  qa: [
    { question: "How did you get into golf?", answer: "We lived at the golf course road for a part of my childhood and I always admired golfers playing. I was totally clueless about the game at the time but always promised myself that I would get to try it out one day. Fast forward, I tasked a colleague golfer from our work place team to link me up with a coach but I wasn’t even that serious. One evening she just said, “Hey, the golf coach is ready for you, tomorrow morning 6.30 am.” It felt so abrupt and too early moreover on a weekday but I love challenges, so there I was at the Uganda Golf Club early the next morning. The rest is history.. I then discovered that there are a good number of golfers among the alumni, they have been an inspiration thus far." },
    { question: "What do you love most about the game?", answer: "Playing golf is one of the best decisions I have made in a while, without any fear of contradiction. I love the strategic decision-making, interestingly a lot of people don’t know that golf is a mind game. I love the long nature walks and above all the networking. I have gotten to meet people from all walks of life." },
    { question: "What's your home course, and your favourite hole?", answer: "I am a Member of the Uganda Golf Club at Acacia. My favorite is hole 9 because I usually get higher scores there. I equally like hole 11 and 17." },
    { question: "What's been your best moment on the course so far?", answer: "My best moment was my first birdie on hole 9, everyone around the course cheered and clapped, even the pros! I felt like I had won the lottery. My first par on hole 17 felt really good too." },
    { question: "And the most humbling one?", answer: "Hole 4 is my most humbling experience so far. Totally unpredictable." },
    { question: "What advice would you give someone just starting out?", answer: "Golf is like life, has ups and downs. The good news is that there is always a better day. Improve your personal skill, learn from the best, play often and enjoy yourself. The rest will fall in line." },
    { question: "Any golf goals for the year ahead?", answer: "I got my handicap this year, been working doubly hard for that. Looking forward to playing in more tournaments and experiencing new golf courses." },
    { question: "How can fellow alumni join you for a round?", answer: "Any day, we just need to make a plan. Currently I’m the only lady alumni amongst men. Looking forward to recruiting more ladies." },
  ],
};

export default spotlight;