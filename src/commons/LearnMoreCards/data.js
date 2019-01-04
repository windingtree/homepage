/* @flow */
import suppliersImg from './img/1.svg';
import sellersImg from './img/2.svg';
import vendorsImg from './img/3.svg';
import foundationImg from './img/5.svg';

import type { DataType } from './index';

const cardsInfo: DataType[] = [
  {
    title: 'Suppliers',
    text: 'Suppliers can distribute inventory directly to points of sale, skipping costly intermediaries and bottlenecks to data.',
    linkText: 'Learn More',
    href: '/suppliers',
    imgSrc: suppliersImg,
    shortText: 'New profitable distribution channel',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'Sellers & Agents',
    text: 'Access inventory from all suppliers from a single platform with no markup fees and no barriers to entry.',
    linkText: 'Learn More',
    href: '/sellers',
    imgSrc: sellersImg,
    shortText: 'No fees and bureaucracy to sell inventory',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'Travel Software Vendors',
    text: 'Build your projects on a set of open-source protocols and APIs. Be a part of the ecosystem!',
    linkText: 'Learn More',
    href: '/software-vendors',
    imgSrc: vendorsImg,
    shortText: 'Deliver more value to your customers',
    buttonLabel: 'Learn More',
    imgWidth: 80,
  },
  {
    title: 'Travel & Tech Community',
    text: 'Join hundreds of innovators from travel startups, corporations and individual developers',
    linkText: 'Join',
    href: '/startups-and-developers',
    imgSrc: foundationImg,
    shortText: 'Join hundreds of innovators to build future',
    buttonLabel: 'Join',
    imgWidth: 80,
  },
];

export default cardsInfo;
