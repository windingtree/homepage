// @flow


type DataType = {
  title: string,
  href: string,
  imgSrc: string
};

const cardsInfo: DataType[] = [
  {
    title: 'Winding Tree Platform',
    href: '#',
    imgSrc: require('./img/WTLogo.svg'),
  },
  {
    title: 'Data Exchange Standars for Travel',
    href: 'https://github.com/windingtree/',
    imgSrc: require('./img/medal.svg'),
  },
  {
    title: 'Travel Tech Con',
    href: 'https://www.traveltechcon.com/',
    imgSrc: require('./img/ttc.png'),
  },
];

export default cardsInfo;
