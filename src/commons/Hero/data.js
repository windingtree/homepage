/* @flow */

type InfoType = {
  title: string,
  text: string,
  primaryButtonHref?: string,
  primaryButtonLabel?: string,
  SecondaryButtonHref?: string,
  SecondaryButtonLabel?: string,
  mdiIcon: string
};

type DataType = {
  foundation: InfoType,
  hackTravel: InfoType,
  lifToken: InfoType,
  sellers: InfoType,
  softwareVendors: InfoType,
  startupsAndDevelopers: InfoType,
  suppliers: InfoType
};

const data: DataType = {
  foundation: {
    title: 'Winding Tree Foundation',
    text: 'A non-profit organization',
    /*primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',*/
    mdiIcon: 'mdi-bitcoin',
  },
  hackTravel: {
    title: 'Hack Travel',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    mdiIcon: 'mdi-bitcoin',
  },
  lifToken: {
    title: 'Lif Token',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: 'https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonHref: 'https://www.youtube.com/watch?v=_qer1qd68eQ&feature=youtu.be',
    SecondaryButtonLabel: 'Watch Video',
    mdiIcon: 'mdi-bitcoin',
  },
  sellers: {
    title: 'An entry point to travel inventory',
    text: 'An open-source technology that gives sellers a commission-free access to thousands of hotels, airlines, cruises and other travel services worldwide.',
    primaryButtonHref: 'https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonHref: 'https://www.youtube.com/watch?v=_qer1qd68eQ&feature=youtu.be',
    SecondaryButtonLabel: 'Watch Video',
    mdiIcon: 'mdi-bitcoin',
  },
  softwareVendors: {
    title: 'Deliver more value with your product',
    text: 'Make your product utilize Winding Tree Platform features and increase its value for users',
    primaryButtonHref: 'https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform',
    primaryButtonLabel: 'Integrate',
    SecondaryButtonHref: 'https://www.youtube.com/watch?v=_qer1qd68eQ&feature=youtu.be',
    SecondaryButtonLabel: 'Watch Video',
    mdiIcon: 'mdi-bitcoin',
  },
  startupsAndDevelopers: {
    title: 'Make future of travel together',
    text: 'Developers, startups, evangelists and geeks are welcome!',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Join community',
    /*SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',*/
    mdiIcon: 'mdi-bitcoin',
  },
  suppliers: {
    title: 'New profitable distribution channel',
    text: 'Deliver your inventory to sellers with new open-source and commision-free channel',
    primaryButtonHref: 'https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonHref: 'https://www.youtube.com/watch?v=_qer1qd68eQ&feature=youtu.be',
    SecondaryButtonLabel: 'Watch Video',
    mdiIcon: 'mdi-bitcoin',
  },
};

export default data;
