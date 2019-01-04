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
  consultancy: DataType
};

const bannersData: BannerDataType = {
  designedFor: {
    title: 'Designed for Driving Innovation',
    mdiIcon: 'mdi-github-circle',
    text: 'Winding Tree is a non-profit foundation that drives the development of open-source protocols to allow any company, big or small, or even an individual developer, to try them out and integrate with the platform in no time.',
    buttonLabel: 'Community',
    href: '#startups-and-developers',
  },
  consultancy: {
    title: 'Consultancy',
    mdiIcon: 'mdi-github-circle',
    text: 'In bibendum odio eu orci egestas tempor. Etiam cursus lacus non egestas aliquet. Duis porttitor, elit eget eleifend gravida, nibh nisi luctus ex, sed consequat magna diam ut libero. Suspendisse eu auctor lorem. Donec vitae ante leo.',
    buttonLabel: 'Inquire about our services',
    href: '#startups-and-developers',
  },
};

export default bannersData;
