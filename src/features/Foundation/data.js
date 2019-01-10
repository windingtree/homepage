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
    imgSrc: './img/max.jpg',
    firstLine: 'Maksim Izmaylov',
    secondLine: 'CEO | CZECH REPUBLIC',
    text: 'Maksim Izmaylov is a software engineer and entrepreneur, previously founder of Roomstorm and Travel Tech Con.',
    icons: {
      github: 'https://github.com/kvakes',
      twitter: 'https://twitter.com/kvakes',
      linkedin: 'https://www.linkedin.com/in/maksimizmaylov/',
      link: 'http://kvakes.com/',
    },
  },
  {
    imgSrc: './img/jakub.jpg',
    firstLine: 'Jakub Vysoky',
    secondLine: 'CTO | CZECH REPUBLIC',
    text: 'Jakub is a backend engineer who previously worked on Roomstorm and before on high-load projects like Giant Bomb and Mythbusters',
    icons: {
      github: 'https://github.com/kvbik',
      twitter: 'https://twitter.com/kvbik',
      linkedin: 'https://www.linkedin.com/in/jakubvysoky',
    },
  },
  {
    imgSrc: './img/pedro.jpg',
    firstLine: 'Pedro Anderson',
    secondLine: 'COO | USA',
    text: 'Pedro is a crypto-investor and a social entrepreneur. Being in charge of partnerships at Winding Tree, he had previously sold millions of dollars of SaaS products.',
    icons: {
      twitter: 'https://twitter.com/pedro_r_a',
      linkedin: 'https://www.linkedin.com/in/pedro-renaud-anderson-08012913/',
    },
  },
  {
    imgSrc: './img/augusto.jpg',
    firstLine: 'Augusto Lemble',
    secondLine: 'BLOCKCHAIN ARCHITECT | ARGENTINA',
    text: 'Blockchain hacker, full-stack developer. He is in charge of smart contracts development, security and integration of the Winding Tree libraries and services into decentralized networks.',
    icons: {
      github: 'https://github.com/AugustoL',
      twitter: 'https://twitter.com/lembleaugusto',
      linkedin: 'https://www.linkedin.com/in/augusto-lemble-812b47a0/',
    },
  },
  {
    imgSrc: './img/dave.jpg',
    firstLine: 'Dave Montali',
    secondLine: 'CIO | PORTUGAL',
    text: 'Dave worked on applications of blockchain in travel distribution back in 2015 while at the OSHM. Previous to Winding Tree he worked as a Research Analyst for the travel research institute Skift Research.',
    icons: {
      github: 'https://github.com/SublimeApple',
      twitter: 'https://twitter.com/davebit_',
      linkedin: 'https://www.linkedin.com/in/davmontali/',
    },
  },
  {
    imgSrc: './img/marina.jpg',
    firstLine: 'Marina Berezovska',
    secondLine: 'HEAD OF COMMUNITY | USA',
    text: 'Marina is the Founder of Travel Tech Con and the Head of Community at Winding Tree leading strategic open source initiatives.',
    icons: {
      twitter: 'https://twitter.com/simpleasthat',
      linkedin: 'https://www.linkedin.com/in/marinajaneiko/',
      link: 'https://www.traveltechcon.com/',
    },
  },
  {
    imgSrc: './img/alex.jpg',
    firstLine: 'Alex Menschikov',
    secondLine: 'PROJECT MANAGER, UX DESIGNER | RUSSIA',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company.',
    icons: {
      facebook: 'https://www.facebook.com/Alex.Menschikov',
      vk: 'https://vk.com/menschikov',
    },
  },
  {
    imgSrc: './img/matias.jpg',
    firstLine: 'Matias Oveja Smith',
    secondLine: 'CORE DEVELOPER | ARGENTINA',
    text: 'Matías is an experienced developer based in Tandil, Argentina. During the last years, he has worked as a full-stack developer for projects in Argentina, Mexico and the United States.',
    icons: {
      github: 'https://github.com/MatiasOS',
    },
  },
  {
    imgSrc: './img/nico.png',
    firstLine: 'Nico Calabrese',
    secondLine: 'UI DEVELOPER & DESIGNER | ARGENTINA',
    text: 'Nico is an experienced UI designer and developer, passionate about CSS architecture (currently his primary role). During his career, he took part in the development of a wide range of projects, targeting nonprofit organizations, startups, fortune 500 companies and the Argentine & US governments.',
    icons: {
      github: 'https://github.com/skkr',
      linkedin: 'https://www.linkedin.com/in/sikker/',
      bitBucket: 'https://sikker.bitbucket.io/',
    },
  },
  {
    imgSrc: './img/jirka.jpg',
    firstLine: 'Jirka Chadima',
    secondLine: 'CORE DEVELOPER | CZECH REPUBLIC',
    text: 'Jirka has a lot of experience with both design and development of complex applications in various technologies. In the past five years, he has worked on many projects for multiple startups and banks.',
    icons: {
      github: 'https://github.com/JirkaChadima',
      linkedin: 'https://www.linkedin.com/in/jirichadima/',
      twitter: 'https://twitter.com/jirkachadima',
    },
  },
  {
    imgSrc: './img/robin.jpg',
    firstLine: 'Robin Gottfried',
    secondLine: 'PROJECT MANAGER | CZECH REPUBLIC',
    text: 'Robin is an IT engineer with more than three decades of experiences in software development from CPU hacking to trustless distributed systems.',
    icons: {
      github: 'https://github.com/czervenka',
    },
  },
  {
    imgSrc: './img/julia.jpg',
    firstLine: 'Julia Pardo',
    secondLine: 'ADMINISTRATIVE ASSISTANT | ARGENTINA',
    text: 'Julia is an enthusiastic autodidact and a power engineer. Her passion for travel and conviction about decentralization have led her to join the team in pursuit of new horizons.',
    icons: {
    },
  },
  {
    imgSrc: './img/spencer.jpg',
    firstLine: 'Spencer Vail',
    secondLine: 'COMMUNITY MANAGER | USA',
    text: 'Spencer is a blockchain enthusiast with over 10 years of experience managing customers for Fintech, e-commerce and lending institutions. His passion for travel & blockchain let him to Winding Tree.',
    icons: {
      twitter: 'https://twitter.com/realspencervail',
      linkedin: 'https://www.linkedin.com/in/spencer-vail-31597352',
    },
  },
];

const advisors: TeamMemberType[] = [
  {
    imgSrc: alex,
    firstLine: 'Alex-00',
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
    firstLine: 'Alex-01',
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

export {
  members,
  advisors,
};
