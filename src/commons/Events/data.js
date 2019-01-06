/* @flow */
import ens from './images/ens.png';
import hamburg from './images/hamburg.png';
import re from './images/re.png';
import capa from './images/capa.png';
import hacktravel2018 from './images/hacktravel2018.png';

export type EventType = {
  date: string,
  month: string,
  name: string,
  location: string,
  imgSrc: string,
  text?: string,
  buttonHref?: string,
  buttonText?: string
};

export type EventsType = {
  own: EventType[],
  upcoming: EventType[],
  past: EventType[]
};

const events: EventsType = {
  upcoming: [
    {
      date: '21-22',
      month: 'Feb',
      name: 'Hamburg Aviation Conference',
      location: 'Hamburg, Germany',
      text: 'Welcome to the other kind of event - the reference for innovation in aviation & travel: innovative, impactful, personal, independent, authentic. 21 - 22 February 2019, Ameron Hotel Speicherstadt, Hamburg, Germany',
      imgSrc: hamburg,
      buttonHref: 'https://www.hamburgaviationconference.com/',
      buttonText: 'check event',
    },
    {
      date: '14',
      month: 'Mar',
      name: 'RE Conference',
      location: 'Amsterdam, The Netherlands',
      imgSrc: re,
      text: 'RE is one event of its kind. It is different from any other industry event. Because RE is where innovation meets real business need. RE is where conflict is good. RE is where we celebrate the benefits of frictions because this is what drives our industry forward. ‘RE’ is where you will be immersed in a creative (and unexpected) environment. RE is where you will look closely at the components of the business travel ecosystem and consider the changes that have happened and those yet to come.',
      buttonHref: 'https://app.azavista.com/event_website_pages/view/home/5c0e9337-1fa4-4e18-8bf6-48540af00018/ecd04a7cac',
      buttonText: 'check event',
    },
  ],
  past: [
    {
      date: '27-28',
      month: 'Nov',
      name: "CAPA's World Aviation Summit",
      location: 'Berlin, Germany',
      imgSrc: capa,
    },
  ],
  own: [
    {
      date: '24-25',
      month: 'Oct',
      name: 'HackTravel Prague',
      location: 'Prague, Czech Republic',
      imgSrc: hacktravel2018,
      text: 'The hackathon, which was the first of its kind, brought together various airlines, travel companies, and blockchain developers coding solutions collaboratively using Winding Tree’s open source platform.',
      buttonHref: '/winding-tree-hackathon-prague-2018',
      buttonText: 'recap',

    },
  ],
};

export default events;
