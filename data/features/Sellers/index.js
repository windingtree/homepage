/* eslint-disable global-require */
import CTAs from 'DATA/commons/CTAs'
import Partners from 'DATA/commons/PartnersAndContributors';


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
        title: "Direct Distribution",
        body: "No intermediaries, Internet itself distributes your inventory P2P'",
        icon: require('./img/direct.svg'),
      },
      {
        title: 'Fast Search Across all Suppliers',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/path.svg'),
      },
      {
        title: 'Easy and Free Access',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/easy.svg'),
      },
      {
        title: 'New products to sell',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/plus.svg'),
      },
    ]
  },
  solutions: {
      header: 'Solutions',
      items: [
        {
            title: 'Online and Offline Travel Agency',
            text: 'If you sell travel as an agency, through your site or would like to add booking of travel to your app, you can integrate with Winding Tree and access suppliers directly through our API without any commission fees or mediation by Winding Tree.',
            imgSrc: require('./img/map.svg'),   
            primaryButtonLabel: 'Developer Portal',
            primaryButtonUrl: 'https://developers.windingtree.com/',
            secondaryButtonLabel:'Use Cases',
            secondaryButtonUrl:'#usecases'
        }

      ]
  },
  partners: {
            header:'Use Cases',
            mainCTAUrl:CTAs.parntersAction,
            mainCTALabel:'Join Platform',
            partnerList: Partners
  },
}

export default SellersPage;
