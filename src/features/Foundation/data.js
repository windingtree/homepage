// @flow
import alexImg from './img/alex.jpg';
import maxImg from './img/max.jpg';
import jakubImg from './img/jakub.jpg';
import pedroImg from './img/pedro.jpg';
import augustoImg from './img/augusto.jpg';
import daveImg from './img/dave.jpg';
import marinaImg from './img/marina.png';
import nicoImg from './img/nico.png';
import jirkaImg from './img/jirka.jpg';
import matiasImg from './img/matias.jpg';
import robinImg from './img/robin.jpg';
import juliaImg from './img/julia.jpg';
import spencerImg from './img/spencer.jpg';

import normImg from './img/norm.jpg';
import donImg from './img/don.png';
import douglasImg from './img/douglas.jpg';
import johnnyImg from './img/johnny.jpg';


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
    imgSrc: maxImg,
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
    imgSrc: jakubImg,
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
    imgSrc: pedroImg,
    firstLine: 'Pedro Anderson',
    secondLine: 'COO | USA',
    text: 'Pedro is a crypto-investor and a social entrepreneur. Being in charge of partnerships at Winding Tree, he had previously sold millions of dollars of SaaS products.',
    icons: {
      twitter: 'https://twitter.com/pedro_r_a',
      linkedin: 'https://www.linkedin.com/in/pedro-renaud-anderson-08012913/',
    },
  },
  {
    imgSrc: augustoImg,
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
    imgSrc: daveImg,
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
    imgSrc: marinaImg,
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
    imgSrc: alexImg,
    firstLine: 'Alex Menschikov',
    secondLine: 'PROJECT MANAGER, UX DESIGNER | RUSSIA',
    text: 'Alex is a developer, project manager and entrepreneur who launched several startups (incl.travel) on the Russian market. He also has a 10-year CIO exp. in an international heavy industry company.',
    icons: {
      facebook: 'https://www.facebook.com/Alex.Menschikov',
      vk: 'https://vk.com/menschikov',
    },
  },
  {
    imgSrc: matiasImg,
    firstLine: 'Matias Oveja Smith',
    secondLine: 'CORE DEVELOPER | ARGENTINA',
    text: 'Matías is an experienced developer based in Tandil, Argentina. During the last years, he has worked as a full-stack developer for projects in Argentina, Mexico and the United States.',
    icons: {
      github: 'https://github.com/MatiasOS',
    },
  },
  {
    imgSrc: nicoImg,
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
    imgSrc: jirkaImg,
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
    imgSrc: robinImg,
    firstLine: 'Robin Gottfried',
    secondLine: 'PROJECT MANAGER | CZECH REPUBLIC',
    text: 'Robin is an IT engineer with more than three decades of experiences in software development from CPU hacking to trustless distributed systems.',
    icons: {
      github: 'https://github.com/czervenka',
    },
  },
  {
    imgSrc: juliaImg,
    firstLine: 'Julia Pardo',
    secondLine: 'ADMINISTRATIVE ASSISTANT | ARGENTINA',
    text: 'Julia is an enthusiastic autodidact and a power engineer. Her passion for travel and conviction about decentralization have led her to join the team in pursuit of new horizons.',
    icons: {
    },
  },
  {
    imgSrc: spencerImg,
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
    imgSrc: normImg,
    firstLine: 'Norm Rose',
    secondLine: 'ADVISOR | USA',
    text: 'Norm is a recognized expert on all aspects of travel technology and travel industry trends. For over two decades, Norm has been an analyst and consultant focused on emerging technologies and how they impact business practices in the global travel industry. He leads Travel Tech Consulting, Inc., a firm that partners with Phocuswright to provide technology consulting to travel companies.',
    icons: {
      twitter: 'https://twitter.com/normtraveltech',
      linkedin: 'https://www.linkedin.com/in/traveltechnology',
      link: 'http://www.traveltechnology.com/',
    },
  },
  {
    imgSrc: donImg,
    firstLine: 'Don Birch',
    secondLine: 'ADVISOR | SWITZERLAND',
    text: 'After a career working in most aspects of travel and in particular travel distribution, Don has turned his hand to applying his industry experience by investing in and mentoring internet based travel startups and travel businesses that are striving to leverage the wonders of Web2.0 and the on-going evolutions thereof. Don has gained experience with the hype (founder: hotelrezexpress.com), with the technology (SITA) and with the important travel agent segment (CEO of Abacus). He is currently a Partner at Travel Innovation Partners.',
    icons: {
      linkedin: 'https://ch.linkedin.com/in/donbirch',
    },
  },
  {
    imgSrc: douglasImg,
    firstLine: 'Douglas Rice',
    secondLine: 'ADVISOR | USA',
    text: 'Douglas Rice is an industry leader in the global hospitality technology industry. He is best known for his role as a founder of the global non-profit industry association Hotel Technology Next Generation.',
    icons: {
      linkedin: 'https://www.linkedin.com/in/ricedouglas/',
    },
  },
  {
    imgSrc: johnnyImg,
    firstLine: 'Johnny Thorsen',
    secondLine: 'ADVISOR | USA',
    text: 'Johnny is a passionate innovator and enjoys disrupting the status quo. Previously he served as Senior Director of Strategy and Product Marketing for Concur Risk Messaging and Senior Director at SAP Mobile Services. Currently he is a VP of Travel Strategy at Mezi.',
    icons: {
      linkedin: 'https://www.linkedin.com/in/johnnythorsen/',
    },
  },
];

export {
  members,
  advisors,
};
