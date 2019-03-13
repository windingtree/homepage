// @flow

type DataType = {
  title: string,
  href: string,
  imgSrc: string
};

const pageTexts = {
  accentText: 'Join the first open marketplace for travel. Create solutions for the vibrant ecosystem of travel suppliers and sellers using open APIs and free and open-source examples.',
  bodyCTAButonText: "collaborate",
  cardsNoticeText: 'If you are a supplier or a seller developing own software, you are in a right way! Integration with winding tree can force your business, make it more profitable and rapid. Check our docs or go to sellers or suppliers section to learn more.'
};

const cardsData: DataType[] = [
  {
    title: 'Check Docs',
    href: 'https://github.com/windingtree/wiki',
    imgSrc: require('./img/docs.svg'),
  },
  {
    title: 'Go to Suppliers page',
    href: '/suppliers',
    imgSrc: require('./img/plane.svg'),
  },
  {
    title: 'Go to Sellers page',
    href: '/sellers',
    imgSrc: require('./img/ota.svg'),
  },
];

export { cardsData, pageTexts };

