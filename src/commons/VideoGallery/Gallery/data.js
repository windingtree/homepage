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
    name: 'Tech Videos',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3g-o28ogTvKrmeLOy5xo2ev',
    imgSrc: tech,
    videoSrc: 'LHjwNqvLTak',
  },
  {
    name: 'About Winding Tree',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3g-o28ogTvKrmeLOy5xo2ev',
    imgSrc: about,
    videoSrc: 'LHjwNqvLTak',
  },
  {
    name: 'Events',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3g-o28ogTvKrmeLOy5xo2ev',
    imgSrc: events,
    videoSrc: 'LHjwNqvLTak',
  },
  {
    name: 'Partners and use cases',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3g-o28ogTvKrmeLOy5xo2ev',
    imgSrc: partners,
    videoSrc: 'LHjwNqvLTak',
  },
];

export default sections;
