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

const roadmapData: RoadmapDataType = [
  {
    firstLine: '2017',
    secondLine: 'Q1-Q4',
    isOpened: false,
    currentPeriod: false,
    groups: [
      {
        title: 'Products',
        elements: [
          {
            done: false,
            text: 'Hotel Explorer Prototype',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
          },
        ],
      },
      {
        title: 'Platform',
        main: true,
        elements: [
          {
            done: false,
            text: 'Lif Token smart contract',
          },
          {
            done: false,
            text: 'Platform Architecture for Hotels',
          },
          {
            done: false,
            text: 'ICO Models',
          },
        ],
      },
      {
        title: 'Foundation',
        elements: [
          {
            done: true,
            text: 'Project Team Formation',
          },
          {
            done: true,
            text: 'Platform Architecture for Hotels',
          },
          {
            done: true,
            text: 'Pre-ICO',
          },
          {
            done: true,
            text: 'Partnership with Lufthansa Group, Nordic Choice Hotels, eRevMax, Zeppelin_OS, RSK',
          },
        ],
      },
    ],
  },
  {
    firstLine: '2018',
    secondLine: 'Q1-Q4',
    isOpened: true,
    currentPeriod: true,
    groups: [
      {
        title: 'Products',
        elements: [
          {
            done: true,
            text: 'Hotel Explorer Prototype',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
          },
        ],
      },
      {
        title: 'Platform',
        main: true,
        elements: [
          {
            done: false,
            text: 'Lif Token smart contract',
          },
          {
            done: false,
            text: 'Platform Architecture for Hotels',
          },
          {
            done: false,
            text: 'ICO Models',
          },
          {
            done: false,
            text: 'Hotel Explorer Prototype',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            isMainButton: true,
          },
          {
            done: false,
            text: 'Hotel Explorer Prototype',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            isMainButton: false,
          },
        ],
      },
      {
        title: 'Foundation',
        elements: [
          {
            done: true,
            text: 'Project Team Formation',
          },
          {
            done: true,
            text: 'Platform Architecture for Hotels',
          },
          {
            done: true,
            text: 'Pre-ICO',
          },
          {
            done: true,
            text: 'Partnership with Lufthansa Group, Nordic Choice Hotels, eRevMax, Zeppelin_OS, RSK',
          },
        ],
      },
    ],
  },
];


export default roadmapData;
