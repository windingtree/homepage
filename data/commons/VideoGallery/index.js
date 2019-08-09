/* eslint-disable global-require */
// @flow

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
    imgSrc: require('./img/tech.jpg'),
    videoSrc: 'r0cI-y6AwoU',
  },
  {
    name: 'About Winding Tree',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3iWS-E27C5c8o9qayTD_7Gj',
    imgSrc: require('./img/about.jpg'),
    videoSrc: 'D9g6wtvBXxY',
  },
  {
    name: 'Events',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3hZMSYLiRQP_g6tOdbUijfd',
    imgSrc: require('./img/events.png'),
    videoSrc: 'PA-cTWPEqGI',
  },
  {
    name: 'Partners',
    href: 'https://www.youtube.com/playlist?list=PLeOExaF4RI3gM35ulrEhiewnwWWOY7x5i',
    imgSrc: require('./img/partners.jpg'),
    videoSrc: 'vlJbLLY4_8A',
  },
];

export default sections;
