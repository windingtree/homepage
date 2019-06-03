// @flow
import CTAs from 'DATA/commons/CTAs'


const VendorsPage = {
    hero: {
      title: 'Deliver more value with your product',
      text: 'Make your product utilize Winding Tree Platform features and increase its value for users',
      primaryButtonHref: CTAs.devPortal,
      primaryButtonLabel: 'Developer Portal',
      SecondaryButtonLabel: 'Watch Video',
      imgSrc: require('./img/software-vendors-hero.svg'),
      videoSrc: '_qer1qd68eQ',
    },
    topSection: {
      accentText: 'Join the first open marketplace for travel. Create solutions for the vibrant ecosystem of travel suppliers and sellers using open APIs and free and open-source examples.',
      CTAButonLabel: "collaborate",
      CTAButtonUrl: CTAs.parntersAction,
      cardsNoticeText: 'If you are a supplier or a seller developing own software, you are in a right way! Integration with winding tree can force your business, make it more profitable and rapid. Check our docs or go to sellers or suppliers section to learn more.',
      cardsData: [
        {
          title: 'Developer Portal',
          href: CTAs.devPortal,
          imgSrc: require('./img/docs.svg'),
          imgWidth: 80,
        },
        {
          title: 'Go to Suppliers page',
          href: '/suppliers',
          imgSrc: require('./img/plane.svg'),
          imgWidth: 80,
        },
        {
          title: 'Go to Sellers page',
          href: '/sellers',
          imgSrc: require('./img/ota.svg'),
          imgWidth: 80,
        },
      ],
    },
};

export default VendorsPage;

