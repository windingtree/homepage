/* @flow */
// import ensLogo from './images/ens.png';
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
  startDate: string,
  endDate?: string,
  startMonth: string, // If there is only a month, it must include year. Ex. "Feb'19",
  endMonth?: string, // When there is start and end Month, the year must be only in endMont
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
      startDate: '21',
      endDate: '22',
      startMonth: "Feb'19",
      name: 'Hamburg Aviation Conference',
      location: 'Hamburg, Germany',
      text: 'Welcome to the other kind of event - the reference for innovation in aviation & travel: innovative, impactful, personal, independent, authentic. 21 - 22 February 2019, Ameron Hotel Speicherstadt, Hamburg, Germany',
      imgSrc: hamburgLogo,
      buttonHref: 'https://www.hamburgaviationconference.com/',
      buttonText: 'check event',
    },
    {
      startDate: '14',
      startMonth: "Mar'19",
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
      startDate: '21',
      endDate: '22',
      startMonth: "Nov'18",
      name: "CAPA's World Aviation Summit",
      location: 'Berlin, Germany',
      imgSrc: capaLogo,
    },
    {
      startDate: '30',
      endDate: '2',
      startMonth: 'Oct',
      endMonth: "Nov'18",
      name: 'Ethereum DevCon',
      location: 'Prague, Czech Republic',
      imgSrc: ethDevConLogo,
    },
    {
      startDate: '26',
      endDate: '28',
      startMonth: "Oct'18",
      name: '#CryptoLife Hackathon',
      location: 'Prague, Czech Republic',
      imgSrc: statusLogo,
    },
    {
      startDate: '18',
      endDate: '19',
      startMonth: "Oct'18",
      name: 'EyeforTravel North America 2018',
      location: 'Las Vegas, USA',
      imgSrc: eyeForTravelLogo,
    },
    {
      startDate: '3',
      startMonth: "Oct'18",
      name: 'The Hotel Distribution Event 2018',
      location: 'London, UK',
      imgSrc: HDE2018Logo,
    },
    {
      startDate: '20',
      startMonth: "Sep'18",
      name: 'Back To The Hospitality Future Summit',
      location: 'London, UK',
      imgSrc: mewsLogo,
    },
    {
      startDate: '6',
      endDate: '7',
      startMonth: "Sep'18",
      name: 'Skolkovo Tourism 2018',
      location: 'Moscow, Russia',
      imgSrc: skLogo,
    },
    {
      startDate: '24',
      endDate: '26',
      startMonth: "Jul'18",
      name: 'HTNG Asia-Pacific Conference',
      location: 'Macau, China',
      imgSrc: htngLogo,
    },
    {
      startDate: '19',
      endDate: '21',
      startMonth: "Jun'18",
      name: 'IATA Aviation Data Symposium & AI Lab',
      location: 'Berlin, Germany',
      imgSrc: iataLogo,
    },
    {
      startDate: '15',
      endDate: '17',
      startMonth: "May'18",
      name: 'Phocuswright Europe',
      location: 'Amsterdam, The Netherlands',
      imgSrc: phocusLogo,
    },
  ],
  own: [
    {
      startDate: '24',
      endDate: '25',
      startMonth: "Oct'18",
      name: 'HackTravel Prague',
      location: 'Prague, Czech Republic',
      imgSrc: hacktravel2018Logo,
      text: 'The hackathon, which was the first of its kind, brought together various airlines, travel companies, and blockchain developers coding solutions collaboratively using Winding Tree’s open source platform.',
      buttonHref: 'https://blog.windingtree.com/hacktravel-hackathon-recap-feacb65cc47d',
      buttonText: 'recap',

    },
    {
      startDate: '7',
      endDate: '8',
      startMonth: "Jun'18",
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
