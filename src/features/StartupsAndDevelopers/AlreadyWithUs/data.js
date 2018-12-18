// @flow
import rsk from './images/rsk.png';
import zeppelinOs from './images/zeppelin.svg';

type CollaboratorType = {
  title: string,
  text: string,
  imgSrc: string
};

const collaborators: CollaboratorType[] = [
  {
    title: 'RSK',
    text: 'Winding Tree will provide a testnet network using the smart contract solutions provided by the RSK network, using a two way payment channels we will be able to have a Lif token and smart contract platform for hotel distribution over bitcoin',
    imgSrc: rsk,
  },
  {
    title: 'Zeppelin OS',
    text: 'Winding Tree will provide its own operative system for upgradeable smart contracts in Ethereum reusing all the solutions provided by ZeppelinOS, having a direct collaboration with them on upgradeable smart contracts, on chain libraries, on chain kernels, decentralized governance, etc.',
    imgSrc: zeppelinOs,
  },
];

export default collaborators;
