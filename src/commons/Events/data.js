/* @flow */
import ensLogo from './images/ens.png';
import hamburgLogo from './images/hamburg.png';
import reLogo from './images/re.png';
import capaLogo from './images/capa.png';
import hacktravel2018Logo from './images/hacktravel2018.png';
import ethDevConLogo from './images/devcon.png';
import statusLogo from './images/status.jpg';
import HDE2018Logo from './images/HDE-2018.jpg';
import eyeForTravelLogo from './images/eyefortravel.png';
import mewsLogo from './images/mews.png';
import skLogo from './images/sk.png';
import phocusLogo from './images/phocus.jpg';
import iataLogo from './images/iata-as.png';
import htngLogo from './images/HTNG.png';
import ttc2018Logo from './images/ttc2018.png';

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
      month: "Feb'19",
      name: 'Hamburg Aviation Conference',
      location: 'Hamburg, Germany',
      text: 'Welcome to the other kind of event - the reference for innovation in aviation & travel: innovative, impactful, personal, independent, authentic. 21 - 22 February 2019, Ameron Hotel Speicherstadt, Hamburg, Germany',
      imgSrc: hamburgLogo,
      buttonHref: 'https://www.hamburgaviationconference.com/',
      buttonText: 'check event',
    },
    {
      date: '14',
      month: "Mar'19",
      name: 'RE Conference',
      location: 'Amsterdam, The Netherlands',
      imgSrc: reLogo,
      text: 'RE is one event of its kind. It is different from any other industry event. Because RE is where innovation meets real business need. RE is where conflict is good. RE is where we celebrate the benefits of frictions because this is what drives our industry forward. ‘RE’ is where you will be immersed in a creative (and unexpected) environment. RE is where you will look closely at the components of the business travel ecosystem and consider the changes that have happened and those yet to come.',
      buttonHref: 'https://app.azavista.com/event_website_pages/view/home/5c0e9337-1fa4-4e18-8bf6-48540af00018/ecd04a7cac',
      buttonText: 'check event',
    },
  ],
  past: [
    {
      date: '27-28',
      month: "Nov'18",
      name: "CAPA's World Aviation Summit",
      location: 'Berlin, Germany',
      imgSrc: capaLogo,
    },
    {
      date: '30-02',
      month: "Oct-Nov'18",
      name: "Ethereum DevCon",
      location: 'Prague, Czech Republic',
      imgSrc: ethDevConLogo,
    },
    {
      date: '26-28',
      month: "Oct'18",
      name: '#CryptoLife Hackathon',
      location: 'Prague, Czech Republic',
      imgSrc: statusLogo,
    },
    {
      date: '18-19',
      month: "Oct'18",
      name: 'EyeforTravel North America 2018',
      location: 'Las Vegas, USA',
      imgSrc: eyeForTravelLogo,
    },
    {
      date: '3',
      month: "Oct'18",
      name: 'The Hotel Distribution Event 2018',
      location: 'London, UK',
      imgSrc: HDE2018Logo,
    },
    {
      date: '20',
      month: "Sep'18",
      name: 'Back To The Hospitality Future Summit',
      location: 'London, UK',
      imgSrc: mewsLogo,
    },
    {
      date: '6-7',
      month: "Sep'18",
      name: 'Skolkovo Tourism 2018',
      location: 'Moscow, Russia',
      imgSrc: skLogo,
    },
    {
      date: '24-26',
      month: "Jul'18",
      name: 'HTNG Asia-Pacific Conference',
      location: 'Macau, China',
      imgSrc: htngLogo,
    },
    {
      date: '19-21',
      month: "Jun'18",
      name: 'IATA Aviation Data Symposium & AI Lab',
      location: 'Berlin, Germany',
      imgSrc: iataLogo,
    },
    {
      date: '15-17',
      month: "May'18",
      name: 'Phocuswright Europe',
      location: 'Amsterdam, The Netherlands',
      imgSrc: phocusLogo,
    },
  ],
  own: [
    {
      date: '24-25',
      month: "Oct'18",
      name: 'HackTravel Prague',
      location: 'Prague, Czech Republic',
      imgSrc: hacktravel2018Logo,
      text: 'The hackathon, which was the first of its kind, brought together various airlines, travel companies, and blockchain developers coding solutions collaboratively using Winding Tree’s open source platform.',
      buttonHref: '/winding-tree-hackathon-prague-2018',
      buttonText: 'recap',

    },
    {
      date: '7-9',
      month: "Jun'18",
      name: 'TravelTechCon 2018',
      location: 'San Francisco, CA',
      imgSrc: ttc2018Logo,
      text: 'Travel Tech Con is The Only Independent Travel Technology Conference for Startups and Engineers',
      buttonHref: 'https://www.traveltechcon.com/conference-recap/',
      buttonText: 'recap',
    },
  ],
};

export default events;
