import CTAs from 'DATA/commons/CTAs'
import Partners from 'DATA/commons/PartnersAndContributors';

const CommunityPage = {
    partners: {
        header:'Partners',
        partnerList: Partners

    },
    contributors : {
        header: 'Contributors',
        mainCTAUrl:'https://developers.windingtree.com/',
        mainCTALabel:'Check Developer Portal',
    },
    communityBanner : {
        title: 'How We Work',
        mdiIcon: 'mdi-github-circle',
        text: 'Winding Tree is an open source and non-profit project. We follow the idea that only open collaborations not for money but for innovations can make real fundamental changes in the world. We welcome open-source developers to our community on github where our source code is open for contribution and forking.',
        buttonLabel: 'Our Github',
        href: 'https://github.com/windingtree/',
        icons: true
    }
}

export default CommunityPage