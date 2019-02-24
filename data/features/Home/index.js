import CTAs from 'DATA/commons/CTAs'
import howItWorksData from 'DATA/commons/HowItWorks';
import partners from 'DATA/commons/PartnersAndContributors';

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
        imgSrc: howItWorksData.imgSrc,
        header: howItWorksData.header,
        text: howItWorksData.text,
        mainCTAUrl: howItWorksData.mainCTAUrl,
        mainCTALabel: howItWorksData.mainCTALabel,
    },
    partners: {
        header:'Partners',
        mainCTAUrl:CTAs.parntersAction,
        mainCTALabel:'Become partner',
        partnerList:partners

    }

    
}

export default mainPage