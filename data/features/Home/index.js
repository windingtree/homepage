import CTAs from 'DATA/commons/CTAs'
import HowItWorksData from 'DATA/commons/HowItWorks';
import Partners from 'DATA/commons/PartnersAndContributors';
import Quotes from 'DATA/commons/InThePress/Quotes'
import Mentions from 'DATA/commons/InThePress/Mentions'
import defaultVideoGalleryItems from 'DATA/commons/VideoGallery'
import defaultEventItems from 'DATA/commons/Events'

const mainPage = {
    hero:{
        mainHeading: 'Winding Tree',
        subHeading:'Welcome ORG.ID - future of business identity',
        mainCTAUrl:CTAs.parntersAction,
        mainCTALabel:'Join Ecosystem',
        secondaryCTAUrl:CTAs.orgIdLink,
        secondaryCTALabel:'ORG.ID'
    },
    features:{
        header:'Features',
        mainCTAUrl:CTAs.parntersAction,
        mainCTALabel:'Join Ecosystem',
        items: [
          {
            name: 'ORG.ID',
            text: "We call the organization representation ORG.ID and maintain a global decentralized business registry of them. It is analogous to government-maintained registries, except that it doesn't rely on a central party and there is no bureaucracy involved in working with it",
            imgSrc: require('./img/puzzle.svg'),
          },
          {
            name: 'Decentralized Infrastructure',
            text: 'No one owns the distribution “server”, because there’s no this server. Blockchain provides core features and hundreds of Winding Tree API instances provide business logic.',
            imgSrc: require('./img/network.svg'),
            link: {
              href: '',
              text: '',
            },
          },
          {
            name: 'Easy Access',
            text: 'Winding Tree provides set of open source REST APIs for whole distribution workflow. Anyone can deploy them in own infrastructure and get access to the infrastructure.',
            imgSrc: require('./img/easy.svg'),
            link: {
              href: CTAs.devPortal,
              text: 'Check API & docs',
            },
          },
          {
            name: 'Direct Distribution',
            text: 'It’s like P2P technology: Winding Tree helps clients (OTAs) get inventory directly from sources (Hotels PMS, Airline software).',
            imgSrc: require('./img/target.svg'),
          },
          {
            name: 'Search Service',
            text: 'WAnyone can just download deploy and run own “GDS-like” service and provide access to OTAs. There will be hundreds alternatives of current middlemen, but all with same inventory. The market will adjust distribution fees to lowest.',
            imgSrc: require('./img/path.svg'),
            link: {
              href: 'https://github.com/windingtree/wt-search-api',
              text: 'Check API & docs',
            },
          },
          
        ],
    },
    howItWorks:{
        imgSrc: HowItWorksData.imgSrc,
        header: HowItWorksData.header,
        text: HowItWorksData.text,
        mainCTAUrl: HowItWorksData.mainCTAUrl,
        mainCTALabel: HowItWorksData.mainCTALabel,
    },
    partners: {
        header:'Partners',
        mainCTAUrl:CTAs.parntersAction,
        mainCTALabel:'Become a partner',
        partnerList: Partners
    },
    press : {
        header: 'In the press',
        quotes: Quotes,
        mentions: Mentions
    }, 
    communityBanner : {
        title: 'Designed for Driving Innovation',
        mdiIcon: 'mdi-github-circle',
        text: 'Winding Tree is a non-profit foundation that drives the development of open-source protocols to allow any company, big or small, or even an individual developer, to try them out and integrate with the platform in no time.',
        buttonLabel: 'Join Community',
        href: 'startups-and-developers',
        icons: true
    },
    videoGallery : {
        header : 'Watch about Winding Tree',
        items : defaultVideoGalleryItems
    },
    events : {
        header: 'Where to meet our team',
        text: 'If you want to invite Winding Tree team to you event please send us an email',
        ctaLink: 'mailto:info@windingtree.com',
        ctaLabel: 'Send Email',
        activeTab: 'Upcoming',
        items : defaultEventItems
    }, 
    readyToUse: {
        header: 'Ready To Use Winding Tree',
        text: 'Learn our API or apply for integration and we will get back to you',
        ctaButtonUrl: CTAs.parntersAction,
        ctaButtonLabel: 'Apply For Integration'
    }

    
}

export default mainPage