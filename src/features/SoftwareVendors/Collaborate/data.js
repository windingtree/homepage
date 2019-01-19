// @flow
import docsImg from './img/docs.svg';
import suppliersImg from './img/suppliers.svg';
import sellersImg from './img/sellers.svg';

type DataType = {
  title: string,
  href: string,
  imgSrc: string
};

const cardsInfo: DataType[] = [
  {
    title: 'Check Docs',
    href: 'https://github.com/windingtree/wiki',
    imgSrc: docsImg,
  },
  {
    title: 'Go to Suppliers page',
    href: '/suppliers',
    imgSrc: suppliersImg,
  },
  {
    title: 'Go to Sellers page',
    href: '/sellers',
    imgSrc: sellersImg,
  },
];

export default cardsInfo;
