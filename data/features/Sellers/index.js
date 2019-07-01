/* eslint-disable global-require */
import CTAs from 'DATA/commons/CTAs'
import Partners from 'DATA/commons/PartnersAndContributors';


const SellersPage = {
  hero: {
    title: 'An entry point to travel inventory',
    text: 'An open-source technology that gives sellers a commission-free access to thousands of hotels, airlines, cruises and other travel services worldwide.',
    primaryButtonHref: CTAs.parntersAction,
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/sellers-hero.svg'),
    videoSrc: CTAs.ctaWatchVideoMain,
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
        body: 'Broad network of APIs helps you to search inventory you need and get filtered result',
        icon: require('./img/path.svg'),
      },
      {
        title: 'Easy and Free Access',
        body: 'Use our documentation portal to educate your developers how to connect to the ecosystem',
        icon: require('./img/easy.svg'),
      },
      {
        title: 'New products to sell',
        body: 'Sell ancillaries directly from suppliers and increase your revenue',
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
            primaryButtonUrl: CTAs.devPortal,
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
