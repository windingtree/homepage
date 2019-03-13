/* eslint-disable import/prefer-default-export */
/* @flow */

type DataType = {
  title: string,
  links: {
    href: string,
    text: string
  }[]
};

const foundation: DataType = {
  title: 'Foundation',
  links: [ 
    {
      href: '/Foundation#About',
      text: 'About',
    },
    {
      href: '/Foundation#Team',
      text: 'Team',
    },
    {
      href: '/Foundation#Events',
      text: 'Events',
    },
    {
      href: '/Foundation#Services',
      text: 'Services',
    },
    {
      href: '/Foundation#Roadmap',
      text: 'Roadmap',
    },
    {
      href: '/White_Paper_EN.pdf',
      text: 'White Paper',
    },
  ],
};

const solutions: DataType = {
  title: 'Solutions',
  links: [ 
    {
      href: '/suppliers',
      text: 'For travel suppliers',
    },
    {
      href: '/sellers',
      text: 'For sellers of travel',
    },
    {
      href: '/software-vendors',
      text: 'For software vendors',
    },
  ],
};


const community: DataType = {
  title: 'Community',
  links: [ 
    {
      href: '/startups-and-developers',
      text: 'Community welcome page',
    },
    {
      href: 'https://developers.windingtree.com/',
      text: 'Developer portal',
    },
    {
      href: 'https://github.com/windingtree/wiki',
      text: 'Join us on GitHub',
    },
  ],
};

export {
  foundation, community, solutions
};
