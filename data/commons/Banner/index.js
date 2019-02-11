/* @flow */
export type DataType = {
  title: string,
  mdiIcon: string,
  text: string,
  buttonLabel: string,
  href: string
};

export type BannerDataType = {
  designedFor: DataType,
  consultancy: DataType,
  howWeWork: DataType
};

const bannersData: BannerDataType = {
  designedFor: {
    title: 'Designed for Driving Innovation',
    mdiIcon: 'mdi-github-circle',
    text: 'Winding Tree is a non-profit foundation that drives the development of open-source protocols to allow any company, big or small, or even an individual developer, to try them out and integrate with the platform in no time.',
    buttonLabel: 'Community',
    href: 'startups-and-developers',
  },
  consultancy: {
    title: 'Consultancy',
    mdiIcon: 'mdi-hexagon-multiple',
    text: 'One of the sources of income for the Winding Tree foundation is consulting services and development of proprietary software products for travel companies, with the focus on projects built top of Winding Tree platform.',
    buttonLabel: 'Inquire about our services',
    href: 'https://goo.gl/o7WP6R',
  },
  howWeWork: {
    title: 'How We Work',
    mdiIcon: 'mdi-github-circle',
    text: 'Winding Tree is an open source and non-profit project. We follow the idea that only open collaborations not for money but for innovations can make real fundamental changes in the world. We welcome open-source developers to our community on github where our source code is open for contribution and forking.',
    buttonLabel: 'Our Github',
    href: 'https://github.com/windingtree/',
  },
};

export default bannersData;
