// @flow
import tech from './images/tech.jpg';
import about from './images/about.jpg';
import events from './images/events.jpg';
import partners from './images/partners.jpg';

type SectionType = {
  name: string,
  href: string,
  imgSrc: string,
  videoSrc: string
};

const sections: SectionType[] = [
  {
    name: 'Tech Talks',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3g-o28ogTvKrmeLOy5xo2ev',
    imgSrc: tech,
    videoSrc: 'r0cI-y6AwoU',
  },
  {
    name: 'About Winding Tree',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3iWS-E27C5c8o9qayTD_7Gj',
    imgSrc: about,
    videoSrc: 'D9g6wtvBXxY',
  },
  {
    name: 'Events',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3hZMSYLiRQP_g6tOdbUijfd',
    imgSrc: events,
    videoSrc: 'lSByZkikdFY',
  },
  {
    name: 'Partners',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3gM35ulrEhiewnwWWOY7x5i',
    imgSrc: partners,
    videoSrc: 'vlJbLLY4_8A',
  },
];

export default sections;
