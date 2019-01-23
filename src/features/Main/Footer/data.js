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

export {
  foundation,
};
