// @flow

type PartnerType = {
  name: string,
  imgSrc: string
};

const partnersSlide1: PartnerType[] = [
  {
    name: 'Air new Zealand',
    imgSrc: require('./img/air-new-zealand.svg'),
  },
  {
    name: 'Air France KLM',
    imgSrc: require('./img/airfranceklm.svg'),
  },
  {
    name: 'Austrian',
    imgSrc: require('./img/austrian.svg'),
  },
  {
    name: 'Nordic',
    imgSrc: require('./img/nordic.png'),
  },
  {
    name: 'Siesta',
    imgSrc: require('./img/siesta.png'),
  },
  {
    name: 'Swiss',
    imgSrc: require('./img/swiss.svg'),
  },
];

const partnersSlide2: PartnerType[] = [
  {
    name: 'Air Canada',
    imgSrc: require('./img/aircanada.png'),
  },
  {
    name: 'Brussels',
    imgSrc: require('./img/brussels.svg'),
  },
  {
    name: 'Etihad',
    imgSrc: require('./img/Etihad.png'),
  },
  {
    name: 'Citizen',
    imgSrc: require('./img/citizen.png'),
  },
  {
    name: 'Euro Wings',
    imgSrc: require('./img/eurowings.svg'),
  },
  {
    name: 'Swiss Port',
    imgSrc: require('./img/logo-swissport.png'),
  },
  {
    name: 'Lufthansa',
    imgSrc: require('./img/lufthansa.svg'),
  },
];

const partnersSlide3: PartnerType[] = [
  {
    name: 'Air gateway',
    imgSrc: require('./img/airgateway.jpg'),
  },
  {
    name: 'Basel',
    imgSrc: require('./img/basel.png'),
  },
  {
    name: 'erevmax',
    imgSrc:  require('./img/erevmax.png'),
  },
  {
    name: 'RSK',
    imgSrc: require('./img/rsk.png'),
  },
  {
    name: 'Sciant',
    imgSrc: require('./img/Sciant.png'),
  },
  {
    name: 'Zeppelin',
    imgSrc: require('./img/zeppelin.svg'),
  },
];

export {
  partnersSlide1,
  partnersSlide2,
  partnersSlide3,
};
