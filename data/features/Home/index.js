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
        subHeading:'Open source infrastructure for travel inventory distribution',
        mainCTAUrl:CTAs.parntersAction,
        mainCTALabel:'Join Ecosystem',
        secondaryCTAUrl:CTAs.ctaWatchVideoMain,
        secondaryCTALabel:'Watch Video'
    },
    features:{
        header:'Features',
        mainCTAUrl:CTAs.parntersAction,
        mainCTALabel:'Join Ecosystem',
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
        mainCTALabel:'Become partner',
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