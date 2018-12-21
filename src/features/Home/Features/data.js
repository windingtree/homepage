// @flow
import DecentralizedImg from './images/1.svg';
import EasyAccess from './images/2.svg';
import LifTokens from './images/3.svg';
import EndToEnd from './images/4.svg';
import Collaboration from './images/5.svg';
import NewProducts from './images/6.svg';

type FeatureType = {
  name: string,
  text: string,
  imgSrc: string,
  link?: {
    href: string,
    text: string
  }
};

const features: FeatureType[] = [
  {
    name: 'Decentralized Infrastructure',
    text: 'In an open market, the decentralized model is the only way to eliminate the risk of eventual monopolization of distribution.',
    imgSrc: DecentralizedImg,
    link: {
      href: '',
      text: '',
    },
  },
  {
    name: 'Easy Access',
    text: 'Access the platform via a set of APIs within minutes. Integrate with the platform within hours. Launch the production-ready version of your software in days.',
    imgSrc: EasyAccess,
    link: {
      href: 'https://github.com/windingtree/',
      text: 'Check API & docs',
    },
  },
  {
    name: 'Lif Tokens',
    text: 'Lif is the fuel of the platform, not only is it used literally to pay the gas of transacting on a public chain, but it is also contains ARI data on inventory and is used as the currency of the platform.',
    imgSrc: LifTokens,
  },
  {
    name: 'End-to-end Distribution',
    text: 'Winding Tree is not another app or OTA, instead Winding Tree facilitates the creation of hundreds or even thousands of new players to build sites, apps.',
    imgSrc: EndToEnd,
    link: {
      href: 'https://github.com/windingtree/',
      text: 'Check API & docs',
    },
  },
  {
    name: 'Collaboration',
    text: 'In order to succeed the project must be governed and maintained by the users of and community. Only by removing the role of a central authority can we bring innovation back to the industry.',
    imgSrc: Collaboration,
    link: {
      href: 'https://windingtree.com/startups-and-developers.html',
      text: 'For startups and developers',
    },
  },
  {
    name: 'New Products and Businesses',
    text: 'When the inventory is publicly available, travel data is actual, blockchain smart contracts eliminate cheaters and automate routine, it will bring travel to new level of service and open doors to absolutely new business models.',
    imgSrc: NewProducts,
  },
];

export default features;
