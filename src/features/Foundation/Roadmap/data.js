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
          },
          {
            done: IN_PROGRESS,
            text: 'ICO Models',
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
            text: 'Platform Architecture for Hotels',
          },
          {
            done: DONE,
            text: 'Pre-ICO',
          },
          {
            done: DONE,
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
            done: DONE,
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
            done: STARTING,
            text: 'Lif Token smart contract',
          },
          {
            done: STARTING,
            text: 'Platform Architecture for Hotels',
          },
          {
            done: STARTING,
            text: 'ICO Models',
          },
          {
            done: STARTING,
            text: 'Hotel Explorer Prototype',
            buttonLabel: 'demo',
            href: 'https://hotel-explorer-demo.windingtree.com/',
            isMainButton: true,
          },
          {
            done: IN_PROGRESS,
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
            done: IN_PROGRESS,
            text: 'Project Team Formation',
          },
          {
            done: IN_PROGRESS,
            text: 'Platform Architecture for Hotels',
          },
          {
            done: IN_PROGRESS,
            text: 'Pre-ICO',
          },
          {
            done: IN_PROGRESS,
            text: 'Partnership with Lufthansa Group, Nordic Choice Hotels, eRevMax, Zeppelin_OS, RSK',
          },
        ],
      },
    ],
  },
];

export {
  roadmapData, STARTING, IN_PROGRESS, DONE,
};
