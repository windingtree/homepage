/* @flow */
import type { DataType } from 'commons/LearnMoreCards';
import suppliersImg from './img/1.svg';
import sellersImg from './img/2.svg';
import vendorsImg from './img/3.svg';
import tokenImg from './img/4.svg';
import foundationImg from './img/5.svg';


const cardsInfo: DataType[] = [
  {
    title: 'Suppliers',
    text: 'New profitable distribution channel',
    linkText: 'Learn More',
    href: '/suppliers',
    imgSrc: suppliersImg,
  },
  {
    title: 'Sellers & Agents',
    text: 'No fees and bureaucracy to sell inventory',
    linkText: 'Learn More',
    href: '/sellers',
    imgSrc: sellersImg,
  },
  {
    title: 'Travel Software Vendors',
    text: 'Deliver more value to your customers',
    linkText: 'Learn More',
    href: '/software-vendors',
    imgSrc: vendorsImg,
  },
  {
    title: 'Travel & Tech Community',
    text: 'Join hundreds of innovators ',
    linkText: 'Join',
    href: '/startups-and-developers',
    imgSrc: tokenImg,
  },
];

export default cardsInfo;
