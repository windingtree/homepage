// @flow
import nordicChoice from './images/nordic.jpg';
import airNewZealand from './images/anz.png';
import swiss from './images/swiss.svg';
import liftansaGroup from './images/lufthansa-group.png';
import rsk from './images/rsk.png';
import zeppelinOS from './images/zeppelin.svg';

type QuoteType = {
    name: string,
    text: string,
    href: string,
    imgSrc: string,
    user?: {
        name: string,
        role: string,
        imgSrc: string
    }
};

const quotes: QuoteType[] = [
  {
    name: 'nordicChoiceHotels',
    text:
            'Nordic Choice Hotels is currently experimenting with the blockchain. Some of the rooms on Hobo have been made available on the blockchain platform Winding Tree, whose data can be used by third-party apps and sites that turn to the customers.',
    href: 'https://www.nordicchoicehotels.com/?',
    imgSrc: nordicChoice,
    imgWidth: 80,
  },
  {
    name: 'airNewZealand',
    text:
            'Making the sales process less complex, Air New Zealand customers can benefit from reduced transactional costs, while the airline can take advantage of the swift and secure sharing of information',
    href: 'https://www.airnewzealand.eu/',
    imgSrc: airNewZealand,
  },
  {
    name: 'swiss',
    text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    href:
            'https://www.swiss.com/ready-takeoff-lufthansa-strikes-deal-blockchain-ico-startup/',
    imgSrc: swiss,
  },
  {
    name: 'liftansaGroup',
    text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    href:
            'https://liftansaGroup.com/2017/10/10/lufthansa-partners-with-a-blockchain-provider-in-an-investment-worth-testing/',
    imgSrc: liftansaGroup,
  },
  {
    name: 'rsk',
    text:
            'Winding Tree will provide a testnet network using the smart contract solutions provided by the RSK network, using a two way payment channels we will be able to have a Lif token and smart contract platform for hotel distribution over bitcoin',
    href: 'https://www.rsk.co/',
    imgSrc: rsk,
    imgWidth: 110,
    imgTopPosition: -11,
  },
  {
    name: 'zeppelinOS',
    text:
            'Winding Tree will provide its own operative system for upgradeable smart contracts in Ethereum reusing all the solutions provided by ZeppelinOS, having a direct collaboration with them on upgradeable smart contracts, on chain libraries, on chain kernels, decentralized governance, etc.',
    href: 'https://zeppelinos.org/',
    imgSrc: zeppelinOS,
  },
];

export default quotes;
