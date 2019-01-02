/* @flow */
import suppliersImg from './img/1.svg';
import sellersImg from './img/2.svg';
import vendorsImg from './img/3.svg';
import tokenImg from './img/4.svg';
import foundationImg from './img/5.svg';

import type { DataType } from './index';

const cardsInfo: DataType[] = [
  {
    title: 'For Suppliers',
    text: 'Suppliers can distribute inventory directly to points of sale, skipping costly intermediaries and bottlenecks to data.',
    linkText: 'Learn More',
    href: '/suppliers',
    imgSrc: suppliersImg,
    shortText: 'A short text in two rows will be in top.',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'For Sellers',
    text: 'Access inventory from all suppliers from a single platform with no markup fees and no barriers to entry.',
    linkText: 'Learn More',
    href: '/sellers',
    imgSrc: sellersImg,
    shortText: 'A short text in two rows will be in top.',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'For Software Vendors',
    text: 'Build your projects on a set of open-source protocols and APIs. Be a part of the ecosystem!',
    linkText: 'Learn More',
    href: '/software-vendors',
    imgSrc: vendorsImg,
    shortText: 'A short text in two rows will be in top.',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'Lif Token',
    text: 'Lif is used by travel companies to distribute inventory and make transactions without intermediaries.',
    linkText: 'Learn More',
    href: '/lif-token',
    imgSrc: tokenImg,
    shortText: 'A short text in two rows will be in top.',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'Foundation',
    text: 'Learn more about the non-profit organization behind the project.',
    linkText: 'Learn More',
    href: '/foundation',
    imgSrc: foundationImg,
    shortText: 'A short text in two rows will be in top.',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
];

export default cardsInfo;
