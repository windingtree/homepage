/* @flow */
import suppliersImg from './img/1.svg';
import sellersImg from './img/2.svg';
import vendorsImg from './img/3.svg';
import tokenImg from './img/4.svg';
import foundationImg from './img/5.svg';

type CardType = {
  title: string,
  text: string,
  linkText: string,
  href: string,
  imgSrc: string
};

const cardsInfo: CardType[] = [
  {
    title: 'For Suppliers',
    text: 'Suppliers can distribute inventory directly to points of sale, skipping costly intermediaries and bottlenecks to data.',
    linkText: 'Learn More',
    href: '/suppliers',
    imgSrc: suppliersImg,
  },
  {
    title: 'For Sellers',
    text: 'Access inventory from all suppliers from a single platform with no markup fees and no barriers to entry.',
    linkText: 'Learn More',
    href: '/sellers',
    imgSrc: sellersImg,
  },
  {
    title: 'For Software Vendors',
    text: 'Build your projects on a set of open-source protocols and APIs. Be a part of the ecosystem!',
    linkText: 'Learn More',
    href: '/software-vendors',
    imgSrc: vendorsImg,
  },
  {
    title: 'Lif Token',
    text: 'Lif is used by travel companies to distribute inventory and make transactions without intermediaries.',
    linkText: 'Learn More',
    href: '/lif-token',
    imgSrc: tokenImg,
  },
  {
    title: 'Foundation',
    text: 'Learn more about the non-profit organization behind the project.',
    linkText: 'Learn More',
    href: '/foundation',
    imgSrc: foundationImg,
  },
];

export default cardsInfo;