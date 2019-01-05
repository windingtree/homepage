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
    title: 'Commision-free tokenized travel distribution',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
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
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    mdiIcon: 'mdi-bitcoin',
  },
  sellers: {
    title: 'Sellers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    mdiIcon: 'mdi-bitcoin',
  },
  softwareVendors: {
    title: 'Software vendors',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    mdiIcon: 'mdi-bitcoin',
  },
  startupsAndDevelopers: {
    title: 'Startups and Developers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    mdiIcon: 'mdi-bitcoin',
  },
  suppliers: {
    title: 'Suppliers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna nec augue condimentum volutpat. Suspendisse nec augue erat.',
    primaryButtonHref: '#',
    primaryButtonLabel: 'Primary button',
    SecondaryButtonHref: '#',
    SecondaryButtonLabel: 'Secondary button',
    mdiIcon: 'mdi-bitcoin',
  },
};

export default data;
