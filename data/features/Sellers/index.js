/* eslint-disable global-require */
import CTAs from 'DATA/commons/CTAs'

const SellersPage = {
  hero: {
    title: 'An entry point to travel inventory',
    text: 'An open-source technology that gives sellers a commission-free access to thousands of hotels, airlines, cruises and other travel services worldwide.',
    primaryButtonHref: 'https://goo.gl/o7WP6R',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/sellers-hero.svg'),
    videoSrc: '_qer1qd68eQ',
  },
  keyBenefitsDescriptions : {
    header: 'Key Benefits',
    items: [
      {
        title: "Direct Distribution'",
        body: "No intermediaries, Internet itself distributes your inventory P2P'",
        icon: require('./img/5.svg'),
      },
      {
        title: 'Fast Search Across all Suppliers',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/6.svg'),
      },
      {
        title: 'Easy and Free Access',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/7.svg'),
      },
      {
        title: 'New products to sell',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/8.svg'),
      },
    ]
  },
}

export default SellersPage;
