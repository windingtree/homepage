import CTAs from 'DATA/commons/CTAs'
import { members, advisors } from 'DATA/commons/Team';

const FoundationPage = {
    hero : {
        title: 'Winding Tree Foundation',
        text: 'A non-profit organization',
        imgSrc: require('./img/foundation-hero.svg'),
    },
    about: {
        text:'Winding Tree Foundation is a non-profit organization incorporated in Switzerland. Its purpose is to develop software projects, data exchange standards and infrastructure with the goal of advancing the travel industry.',
        cardSectionHeader:'Winding Tree foundation currently supports these initiatives:',
        cardsInfo: [
            {
                title: 'Winding Tree Platform',
                href: '#',
                imgSrc: require('./img/WTLogo.svg'),
            },
            {
                title: 'Data Exchange Standars for Travel',
                href: CTAs.devPortal,
                imgSrc: require('./img/medal.svg'),
            },
            {
                title: 'Travel Tech Con',
                href: 'https://www.traveltechcon.com/',
                imgSrc: require('./img/ttc.png'),
            },
        ]
    },
    team: {
        header: 'Team',
        items: members
    },
    advisors: {
        header: 'Advisors',
        items: advisors 
    },
    servicesBanner : {
        title: 'Consultancy',
        mdiIcon: 'mdi-hexagon-multiple',
        text: 'One of the sources of income for the Winding Tree foundation is consulting services and development of proprietary software products for travel companies, with the focus on projects built top of Winding Tree platform.',
        buttonLabel: 'Inquire about our services',
        href: 'mailto:info@windingtree.com',
        icons: false
    }
}

export default FoundationPage