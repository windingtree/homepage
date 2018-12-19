// @flow
import AirNewZealand from './images/air-new-zealand.svg';
import AirFranceKlm from './images/airfranceklm.svg';
import Austrian from './images/austrian.svg';
import Nordic from './images/nordic.png';
import Siesta from './images/siesta.png';
import Swiss from './images/swiss.svg';

import AirCanada from './images/aircanada.png';
import Brussels from './images/brussels.svg';
import Citizen from './images/citizen.png';
import EuroWings from './images/eurowings.svg';
import Swissport from './images/logo-swissport.png';
import Lufthansa from './images/lufthansa.svg';

import AirGateway from './images/airgateway.jpg';
import Basel from './images/basel.png';
import Erevmax from './images/erevmax.png';
import RSK from './images/rsk.png';
import Sciant from './images/Sciant.png';
import Zeppelin from './images/zeppelin.svg';

type PartnerType = {
  name: string,
  imgSrc: string
};

const partnersSlide1: PartnerType[] = [
  {
    name: 'Air new Zealand',
    imgSrc: AirNewZealand,
  },
  {
    name: 'Air France KLM',
    imgSrc: AirFranceKlm,
  },
  {
    name: 'Austrian',
    imgSrc: Austrian,
  },
  {
    name: 'Nordic',
    imgSrc: Nordic,
  },
  {
    name: 'Siesta',
    imgSrc: Siesta,
  },
  {
    name: 'Swiss',
    imgSrc: Swiss,
  },
];

const partnersSlide2: PartnerType[] = [
  {
    name: 'Air Canada',
    imgSrc: AirCanada,
  },
  {
    name: 'Brussels',
    imgSrc: Brussels,
  },
  {
    name: 'Citizen',
    imgSrc: Citizen,
  },
  {
    name: 'Euro Wings',
    imgSrc: EuroWings,
  },
  {
    name: 'Swiss Port',
    imgSrc: Swissport,
  },
  {
    name: 'Lufthansa',
    imgSrc: Lufthansa,
  },
];

const partnersSlide3: PartnerType[] = [
  {
    name: 'Air gateway',
    imgSrc: AirGateway,
  },
  {
    name: 'Basel',
    imgSrc: Basel,
  },
  {
    name: 'erevmax',
    imgSrc: Erevmax,
  },
  {
    name: 'RSK',
    imgSrc: RSK,
  },
  {
    name: 'Sciant',
    imgSrc: Sciant,
  },
  {
    name: 'Zeppelin',
    imgSrc: Zeppelin,
  },
];

export {
  partnersSlide1,
  partnersSlide2,
  partnersSlide3,
};
