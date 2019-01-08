// @flow
import alex from './img/alex.jpg';

export type IconsType = {
  github?: string,
  twitter?: string,
  linkedin?: string,
  link?: string,
  bitBucket?: string,
  vk?: string,
  facebook?: string
};

export type TeamMemberType = {
  imgSrc: string,
  firstLine: string,
  secondLine: string,
  text: string,
  icons?: IconsType
};

const members: TeamMemberType[] = [
  {
    imgSrc: alex,
    firstLine: 'Alex',
    secondLine: 'DESIGNER | RUSSIA ',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company',
    icons: {
      github: 'string',
      twitter: 'string',
      linkedin: 'string',
      link: 'string',
      bitBucket: 'string',
      vk: 'string',
      facebook: 'string',
    },
  },
  {
    imgSrc: alex,
    firstLine: 'Alex',
    secondLine: 'DESIGNER | RUSSIA ',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company',
    icons: {
      github: 'string',
      twitter: 'string',
      linkedin: 'string',
      link: 'string',
      bitBucket: 'string',
      vk: 'string',
      facebook: 'string',
    },
  },
  {
    imgSrc: alex,
    firstLine: 'Alex',
    secondLine: 'DESIGNER | RUSSIA ',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company',
    icons: {
      github: 'string',
      twitter: 'string',
      linkedin: 'string',
      link: 'string',
      bitBucket: 'string',
      vk: 'string',
      facebook: 'string',
    },
  },
  {
    imgSrc: alex,
    firstLine: 'Alex',
    secondLine: 'DESIGNER | RUSSIA ',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company',
    icons: {
      github: 'string',
      twitter: 'string',
      linkedin: 'string',
      link: 'string',
      bitBucket: 'string',
      vk: 'string',
      facebook: 'string',
    },
  },
  {
    imgSrc: alex,
    firstLine: 'Alex',
    secondLine: 'DESIGNER | RUSSIA ',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company',
    icons: {
      github: 'string',
      twitter: 'string',
      linkedin: 'string',
      link: 'string',
      bitBucket: 'string',
      vk: 'string',
      facebook: 'string',
    },
  },
];

export default members;
