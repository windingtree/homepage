import CTAs from 'DATA/commons/CTAs'
import Partners from 'DATA/commons/PartnersAndContributors';

const CommunityPage = {
    hero: {
        title: 'Make the future of travel together',
        text: 'Developers, startups, evangelists and geeks are welcome!',
        primaryButtonHref: CTAs.devPortal,
        primaryButtonLabel: 'Developer portal',
        imgSrc: require('./img/startups-and-developers-hero.svg'),
    },
    quote: {
        body: "In a decentralized travel distribution system, for example, there is no room for rent-seeking intermediaries, therefore the wealth they are currently hoarding will be distributed to the rest of the network, making travel cheaper for travelers and more profitable for travel companies.",
        name: "Maksim Izmaylov",
        role: "Founder, CEO",
        img: require('./img/max.jpg')
    },
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
    },
    communityProjects : {
        header: 'Built By Community',
        projects: [
            {
                title:"Air France - KLM",
                text:"First solution to adapt Winding Tree Hotel Architecture to airline business",
                imgSrc:require("./img/git.svg"),
                href:"https://github.com/windingtree/wt-hackathon/blob/master/submissions/2018/AFKL_submission.md",
                imgWidth: 100,
            },
            {
                title:"Siesta Cloud",
                text:"Connect Winding Tree with real hotel management software Siesta Solution (Siesta)",
                imgSrc:require("./img/git.svg"),
                href:"https://github.com/windingtree/wt-hackathon/blob/master/submissions/2018/siesta.md",
                imgWidth: 100,
            },
            {
                title:"Emergency Shelter",
                text:"A project that really helps people got in troubles",
                imgSrc:require("./img/git.svg"),
                href:"https://github.com/windingtree/wt-hackathon/blob/master/submissions/2018/Emergency-Shelter.md",
                imgWidth: 100,
            },
            {
                title:"Liquid Ancillaries",
                text:"Liquid Ancillaries",
                imgSrc:require("./img/git.svg"),
                href:"https://github.com/windingtree/wt-hackathon/blob/master/submissions/2018/LiquidAccommodationSupplements.md",
                imgWidth: 100
            }
        ]
    }
}

export default CommunityPage