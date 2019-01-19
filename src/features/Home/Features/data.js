// @flow
import DecentralizedImg from './images/1.svg';
import EasyAccess from './images/2.svg';
import LifTokens from './images/3.svg';
import EndToEnd from './images/4.svg';
import Collaboration from './images/5.svg';
// import NewProducts from './images/6.svg';

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
    text: 'No one owns the distribution “server”, because there’s no this server. Blockchain provides core features and hundreds of Winding Tree API instances provide business logic.',
    imgSrc: DecentralizedImg,
    link: {
      href: '',
      text: '',
    },
  },
  {
    name: 'Easy Access',
    text: 'Winding Tree provides set of open source REST APIs for whole distribution workflow. Anyone can deploy them in own infrastructure and get access to the infrastructure.',
    imgSrc: EasyAccess,
    link: {
      href: 'https://github.com/windingtree/',
      text: 'Check API & docs',
    },
  },
  {
    name: 'Direct Distribution',
    text: 'It’s like P2P technology: Winding Tree helps clients (OTAs) get inventory directly from sources (Hotels PMS, Airline software).',
    imgSrc: LifTokens,
  },
  {
    name: 'Search Service',
    text: 'WAnyone can just download deploy and run own “GDS-like” service and provide access to OTAs. There will be hundreds alternatives of current middlemen, but all with same inventory. The market will adjust distribution fees to lowest.',
    imgSrc: EndToEnd,
    link: {
      href: 'https://github.com/windingtree/wt-search-api',
      text: 'Check API & docs',
    },
  },
  {
    name: 'Data Standards',
    text: 'Revolutionary approach requires a kind of convention over configuration for parties, and this is what our Data Standards about - make inventory information usable across all software in the industry.',
    imgSrc: Collaboration,
  },
];

export default features;
