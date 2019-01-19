/* @flow */

export type ItemType = {
  done: boolean,
  text: string,
  buttonLabel: string,
  href: string,
  isMainButton: boolean // When true, the button is styled as primary
};

export type GroupType = {
  title: string,
  main?: boolean,
  elements: ItemType[]
};

export type PeriodType = {
  firstLine: string,
  secondLine: string,
  isOpened: boolean,
  currentPeriod: boolean, // when false, Perdiod will be greyish
  groups: GroupType[]
};

export type RoadmapDataType = PeriodType[];


const STARTING: number = 0;
const IN_PROGRESS: number = 1;
const DONE: number = 2;

const roadmapData: RoadmapDataType = [
  {
    firstLine: '2017',
    secondLine: 'Q1-Q4',
    thirdLine: 'Research and PoC',
    isOpened: false,
    currentPeriod: false,
    groups: [
      {
        title: 'Products',
        elements: [
          {
            done: IN_PROGRESS,
            text: 'Hotel Explorer Prototype',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            tooltip: 'We started working on a Winding Tree Demo application',
          },
        ],
      },
      {
        title: 'Platform',
        main: true,
        elements: [
          {
            done: IN_PROGRESS,
            text: 'Lif Token smart contract',
          },
          {
            done: IN_PROGRESS,
            text: 'Platform Architecture for Hotels',
            tooltip: 'Platform architecture design for distribution of hotels inventory',
          },
          {
            done: DONE,
            text: 'ICO Models',
            tooltip: 'Preparation for the ICO',
          },
        ],
      },
      {
        title: 'Foundation',
        elements: [
          {
            done: DONE,
            text: 'Project Team Formation',
          },
          {
            done: DONE,
            text: 'Legal Status',
            tooltip: 'Incorporation registered',
          },
          {
            done: DONE,
            text: 'Pre-ICO',
          },
          {
            done: DONE,
            text: 'Partnership with Lufthansa Group, Nordic Choice Hotels, eRevMax, Zeppelin_OS, RSK',
            tooltip: 'Successful year for partnerships with first key industry partners',
          },
        ],
      },
    ],
  },
  {
    firstLine: '2018',
    secondLine: 'Q1-Q2',
    thirdLine: 'Architecture & Core',
    isOpened: false,
    currentPeriod: false,
    groups: [
      {
        title: 'Products',
        elements: [
          {
            done: IN_PROGRESS,
            text: 'Hotel Explorer',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            tooltip: 'New platform features added to Hotel Explorer',
          },
          {
            done: DONE,
            text: 'ICO website launched',
          },
        ],
      },
      {
        title: 'Platform',
        main: true,
        elements: [
          {
            done: DONE,
            text: 'Platform Architecture for Hotels',
            tooltip: 'We released the initial version of our platform architecture and started building features based on it',
          },
          {
            done: DONE,
            text: 'Initial version of Data Exchange Format',
            tooltip: 'Winding Tree developed Hotel Data Exchange standard to use within ecosystem. Similar to the NDC standard but for hotels. We continiously improve it',
          },
          {
            done: DONE,
            text: 'JS-library',
            tooltip: 'This is the core of all of our API services and can be used by anyone who wants to develop a service integrated with Winding Tree',
            buttonLabel: 'source code',
            href: 'https://github.com/windingtree/wt-js-libs',
          },
          {
            done: DONE,
            text: 'Read API',
            tooltip: "RESTful API that makes reading inventory through Winding Tree simple so you don't need to deal with blockchain",
            buttonLabel: 'source code',
            href: 'https://github.com/windingtree/wt-read-api',
          },
          {
            done: IN_PROGRESS,
            text: 'ERC827 token',
            tooltip: 'Our blockchain architect works on a new Ethereum token standard which will help us to develop new platform features',
          },
        ],
      },
      {
        title: 'Foundation',
        elements: [
          {
            done: DONE,
            text: 'Successful ICO and Token Generation Event',
            tooltip: 'Successful ICO: we raised over 16k ETH from more than 7000 investors, what was over 16M USD',
            buttonLabel: 'stats',
            href: 'https://lif.windingtree.com/',
          },
          {
            done: DONE,
            text: 'Execute market validation mechanism',
            tooltip: 'Learn about it in our White Paper',
          },
          {
            done: DONE,
            text: 'Team building event in Prague',
            tooltip: 'Our team members from all over the world came to Prague to work on  the project',
          },
          {
            done: DONE,
            text: 'Partnership with Swissport, Swiss Airlines, Sciant, AirGateway',
          },
        ],
      },
    ],
  },
  {
    firstLine: '2018',
    secondLine: 'Q3-Q4',
    thirdLine: 'APIs & Demo Apps',
    isOpened: false,
    currentPeriod: false,
    groups: [
      {
        title: 'Products',
        elements: [
          {
            done: IN_PROGRESS,
            text: 'Hotel Explorer',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            tooltip: 'We continued development of the platform and added new features to our demo application',
          },
          {
            done: DONE,
            text: 'Booking Application',
            buttonLabel: 'source code',
            href: 'https://github.com/windingtree/crypto-booking',
            tooltip: 'Winding Tree partnered with ETH Berlin and we developed a completely functional crypto booking app in the world to be used for booking accommodations for the ETH Berlin event',
          },
          {
            done: IN_PROGRESS,
            text: 'Design System and UI Framework',
            buttonLabel: 'contribute',
            href: 'mailto:alex.menschikov@windingtree.com',
            isMainButton: true,
            tooltip: 'We are working on React UI Framework to build applications on top of our platform. We need some help here',
          },
        ],
      },
      {
        title: 'Platform',
        main: true,
        elements: [
          {
            done: DONE,
            text: 'Write API',
            tooltip: "RESTful API that makes posting inventory to Winding Tree easy, you don't need to deal with blockchain",
          },
          {
            done: DONE,
            text: 'Room availability',
            tooltip: 'The dynamic data for room availability became accessible through Winding Tree',
            buttonLabel: 'kanban board',
            href: 'https://trello.com/c/zhALr7QO/97-realtime-availability-proof-of-concept',
          },
          {
            done: DONE,
            text: 'Realtime updates',
            tooltip: 'API for subscription for realtime updates of inventory changes',
            buttonLabel: 'join discussion',
            href: 'https://groups.google.com/forum/#!topic/windingtree/_0ZDOvS04fQ',
          },
          {
            done: IN_PROGRESS,
            text: 'Platform Architecture for Airlines',
            tooltip: 'Platform architecture design for distribution of airline inventory',
            buttonLabel: 'join discussion',
            href: 'https://groups.google.com/forum/#!topic/windingtree/VGiSzzg--PY',
            isMainButton: true,
          },
          {
            done: DONE,
            text: 'Search API',
            tooltip: 'We started working on a RESTful API that makes searching inventory through Winding Tree simple and easy',
          },
          {
            done: DONE,
            text: 'Booking API',
            tooltip: 'We started working on RESTful API that makes bookings through Winding Tree simple and easy',
            buttonLabel: 'join discussion',
            href: 'https://groups.google.com/forum/#!topic/windingtree/_ikYtYSlsPU',
          },
          {
            done: IN_PROGRESS,
            text: 'Distributed Storages',
            buttonLabel: 'read more',
            href: 'https://blog.windingtree.com/decentralized-storage-for-winding-tree-f86535bee014',
          },
          {
            done: IN_PROGRESS,
            text: '2nd Layer Solutions',
          },
          {
            done: IN_PROGRESS,
            text: 'Payment Process',
          },
        ],
      },
      {
        title: 'Foundation',
        elements: [
          {
            done: DONE,
            text: 'Winding Tree Hackathon',
            tooltip: 'Winding Tree organized a great hackathon in Prague which was attended by more than 100 developers from all over the world',
            buttonLabel: 'recap',
            href: 'https://blog.windingtree.com/hacktravel-hackathon-recap-feacb65cc47d',
          },
          {
            done: DONE,
            text: 'Partnership with AirCanada, AirFrance-KLM, HahnAir, Siesta Cloud',
          },
        ],
      },
    ],
  },
  {
    firstLine: '2019',
    secondLine: 'Q1-Q4',
    thirdLine: 'Real inventory distribution',
    isOpened: true,
    currentPeriod: true,
    groups: [
      {
        title: 'Products',
        elements: [
          {
            done: IN_PROGRESS,
            text: 'Hotel Explorer',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            tooltip: 'We continue development of the platform and adding new features to our demo application',
          },
          {
            done: STARTING,
            text: 'Airline Explorer',
            tooltip: 'A demo application to show airline inventory',
          },
          {
            done: IN_PROGRESS,
            text: 'Design System and UI Framework',
            buttonLabel: 'contribute',
            href: 'mailto:alex.menschikov@windingtree.com',
            isMainButton: true,
            tooltip: 'We are working on React UI Framework to build applications on top of our platform. We need some help here',
          },
        ],
      },
      {
        title: 'Platform',
        main: true,
        elements: [
          {
            done: IN_PROGRESS,
            text: 'Integration with Hobo Hotel, eRevMax, Hahn Air',
            tooltip: 'Integration with suppliers to distribute real hotel and airline inventory',
          },
          {
            done: IN_PROGRESS,
            text: 'Payments',
            tooltip: 'We started researching how to make payments through Winding Tree as easy as possible',
          },
          {
            done: IN_PROGRESS,
            text: 'Reputation System',
            tooltip: 'Supplier reputation system development',
          },
          {
            done: STARTING,
            text: 'Tour Packages Distribution',
          },
          {
            done: IN_PROGRESS,
            text: 'Platform Architecture for Airlines',
            tooltip: 'Platform architecture design for distribution of airline inventory',
            buttonLabel: 'join discussion',
            href: 'https://groups.google.com/forum/#!topic/windingtree/VGiSzzg--PY',
            isMainButton: true,
          },
          {
            done: IN_PROGRESS,
            text: 'Distributed Storages',
            buttonLabel: 'read more',
            href: 'https://blog.windingtree.com/decentralized-storage-for-winding-tree-f86535bee014',
          },
          {
            done: IN_PROGRESS,
            text: '2nd Layer Solutions',
          },
        ],
      },
      {
        title: 'Foundation',
        elements: [
          {
            done: STARTING,
            text: 'Winding Tree Hackathon',
            tooltip: '2nd Windingtree Hackathon',
          },
          {
            done: STARTING,
            text: 'Winding Tree Roundtable',
            tooltip: 'An open innovation initiative for the industry leaders to promote and support cross-organization collaboration, open source development and solving real-world industry pain points with collective intelligence and active participation.',
          },
        ],
      },
    ],
  },
];

export {
  roadmapData, STARTING, IN_PROGRESS, DONE,
};
