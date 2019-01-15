// @flow
import WTLogo from './img/WTLogo.svg';
import medalLogo from './img/medal.svg';
import TTCLogo from './img/ttc.png';

type DataType = {
  title: string,
  href: string,
  imgSrc: string
};

const cardsInfo: DataType[] = [
  {
    title: 'Winding Tree Platform',
    href: '#',
    imgSrc: WTLogo,
  },
  {
    title: 'Data Exchange Standars for Travel',
    href: 'https://github.com/windingtree/',
    imgSrc: medalLogo,
  },
  {
    title: 'Travel Tech Con',
    href: 'https://www.traveltechcon.com/',
    imgSrc: TTCLogo,
  },
];

export default cardsInfo;
