/* eslint-disable global-require */
import CTAs from 'DATA/commons/CTAs'
import Partners from 'DATA/commons/PartnersAndContributors';


const SuppliersPage = {
  hero: {
    title: 'New profitable distribution channel',
    text: 'Deliver your inventory to sellers with new open-source and commission-free channel',
    primaryButtonHref: 'https://goo.gl/o7WP6R',
    primaryButtonLabel: 'Apply for integration',
    SecondaryButtonLabel: 'Watch Video',
    imgSrc: require('./img/suppliers-hero.svg'),
    videoSrc: '_qer1qd68eQ',
  },
  keyBenefitsDescriptions : {
    header: 'Key Benefits',
    items: [
      {
        title: 'Efficient Direct Distribution',
        body: 'No intermediaries, Internet itself distributes your inventory like P2P',
        icon: require('./img/1.svg'),
      },
      {
        title: 'Next Generation Sales Channel',
        body: 'Make additional sales by opening you inventory to new sellers and payment methods',
        icon: require('./img/2.svg'),
      },
      {
        title: 'Control Your Data',
        body: 'Manage your data securely and have realtime overview of bookings and inventory availability',
        icon: require('./img/3.svg'),
      },
      {
        title: 'Set up Rewards for OTAs yourself',
        body: 'Now you decide how much fee seller will get as rewards for their job',
        icon: require('./img/4.svg'),
      },
    ]
  },
  solutions: {
      header: 'Solutions',
      items: [
        {
            title: 'For Hotels',
            text: 'Hotels can integrate with our simple APIs to showcase availability on the Winding Tree marketplace.',
            imgSrc: require('./img/hotel.svg'),   
            secondaryButtonLabel:'Use Cases',
            secondaryButtonUrl:'#usecases'
        },
        {
            title: 'For Airlines',
            text: 'Lower your distribution and transactional cost by using new commission-free distribution channel, more reliable than any major GDS.',
            imgSrc: require('./img/plane.svg'),   
            secondaryButtonLabel:'Use Cases',
            secondaryButtonUrl:'#usecases'
        },
        {
            title: 'For Tours, Activities, Rental, Cruise operators',
            text: 'Join roundtables, discussions and contribute development to Platform development for your business needs',
            imgSrc: require('./img/map.svg'),
            secondaryButtonLabel:'Developer Portal',
            secondaryButtonUrl:'https://developers.windingtree.com/'
        },
      ],
        partners: {
            header:'Use Cases',
            mainCTAUrl:CTAs.parntersAction,
            mainCTALabel:'Join Platform',
            partnerList: Partners
        },
  }
}

export default SuppliersPage;

