import CTAs from 'DATA/commons/CTAs'
import HowItWorksData from 'DATA/commons/HowItWorks';
import Partners from 'DATA/commons/PartnersAndContributors';
import Quotes from 'DATA/commons/InThePress/Quotes'
import Mentions from 'DATA/commons/InThePress/Mentions'

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
    }

    
}

export default mainPage