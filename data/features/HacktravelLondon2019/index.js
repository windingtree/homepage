import CTAs from 'DATA/commons/CTAs';

const Hacktravel = {
    header : {
        title: "#HackTravel London",
        subtitle:"November 4-6, London, UK",
        description: "Build open source, decentralized solutions along with airlines, hotels, travel startups and blockchain experts.",
        imgSrc: require('./img/hacktravellisbon.jpg'),
        mainButtonLabel: "Join Hackathon",
        mainButtonUrl: "#register",
        secondaryButtonLabel: "Watch Video",
        secondaryButtonUrl: "09xe4IX1mrc"
    },
    about : {
        header : 'What to Expect',
        text : '#HackTravel hackathon is a unique opportunity for the most forward thinking travel industry players to come together and collaboratively tackle real world industry pain points.\n \nFollowing the success of our #HackTravel Prague hackathon, this year we’re adding more benefits, content and activities for our community to get the most out of their participation.',
        ButtonLabel: "#HackTravel Prague Recap",
        ButtonUrl: "https://blog.windingtree.com/hacktravel-hackathon-recap-feacb65cc47d",
    },
    photos : [
        {
            photo: require('./img/photos/0.jpg'),
        },
    ],
    benefits : [
        {
            imgSrc:require('./img/benefits/plus.svg'),
            header:'3 Days Packed with Activities',
        },
        {
            imgSrc:require('./img/benefits/puzzle.svg'),
            header:'New Addition - Business Hackathon',
        },
        {
            imgSrc:require('./img/benefits/easy.svg'),
            header:'Tangible Results to Bring Home',
        },
        {
            imgSrc:require('./img/benefits/community.svg'),
            header:'Designed For Beginners and Experts',
        },
    ],
    attendees : {
        header: "Who is Invited",
        subtitle: "",
        types: [
            {
                imgSrc:require('./img/benefits/plane.svg'),
                title:'Airlines \n & Hotels',
                buttonUrl: CTAs.eventAttendeeAction,
                buttonLabel: "Apply To Get Early Bird Tickets",
                buttonStyle: "btn-primary",
                benefits: ["Learn new technology","Collaborate on solutions","Get complimentary training for your tech team","Solve your own business challenges"],
                accentedNotice: "Early Bird Tickets 250$",
                secondaryNotice: "50% off if you’re bringing your technical team to hack. Spots are limited to 50"
            },
            {
                imgSrc:require('./img/benefits/git.svg'),
                title:'Independent Developers\n& Software Companies',
                buttonUrl: CTAs.eventAttendeeAction,
                buttonLabel: "Join For Free",
                buttonStyle: "btn-primary",
                benefits: ["Form or join a team to hack","Work on proposed challenges","Bring your own hack idea","Experiment","Get mentorship"],
                accentedNotice: "Approved hackers are invited to join us at zero cost.",
                secondaryNotice: "Spots are limited to 80"
            },
            {
                imgSrc:require('./img/benefits/ota.svg'),
                title:'Travel Startups\n& OTAs',
                buttonUrl: CTAs.eventAttendeeAction,
                buttonLabel: "Join For Free",
                buttonStyle: "btn-primary",
                benefits: ["Bring your team to learn and hack","Get training and mentorship","Work on your own idea","Experiment","Connect with industry veterans"],
                accentedNotice: "Approved hackers are invited to join us at zero cost.",
                secondaryNotice: "Spots are limited to 80"
            },
        ],
    },
    sponsors : {
        header : 'Contribute as a Sponsor and Get More',
        text : 'Put your organization in the spotlight of innovation and support the community of industry disruptors. We got tons of great sponsor benefits for you - get in touch and we’ll be happy to discuss the many ways you can be part of this event.',
        buttonUrl: CTAs.eventSponsorAction,
        buttonLabel: "Check Sponsorship Options",
        buttonStyle: "btn-outline-dark",
    },
    challenges:{
        header: "Hackathon Challenges",
        accentText: 'Here are some of Hackathon challenges, more coming up',
        CTAButonLabel: "Propose Own Challenge",
        CTAButtonUrl: CTAs.eventAttendeeAction,
        cardsData: [
            {
            title: '#1 Blockchain based Metasearch',
            href: 'https://github.com/windingtree/wt-hackathon/issues/45',
            imgSrc: require('./img/benefits/git.svg'),
            imgWidth: 80,
            },
            {
            title: '#2 Sell a room',
            href: 'https://github.com/windingtree/wt-hackathon/issues/46',
            imgSrc: require('./img/benefits/git.svg'),
            imgWidth: 80,
            },
            {
            title: '#3 ORG.ID explorer',
            href: 'https://github.com/windingtree/wt-hackathon/issues/47',
            imgSrc: require('./img/benefits/git.svg'),
            imgWidth: 80,
            },
            {
                title: '#4 Package Booking',
                href: 'https://github.com/windingtree/wt-hackathon/issues/37',
                imgSrc: require('./img/benefits/git.svg'),
                imgWidth: 80,
            },
            {
                title: '#5 Authorization APP',
                href: 'https://github.com/windingtree/wt-hackathon/issues/48',
                imgSrc: require('./img/benefits/git.svg'),
                imgWidth: 80,
            },
            {
                title: '#6 Receive bookings',
                href: 'https://github.com/windingtree/wt-hackathon/issues/49',
                imgSrc: require('./img/benefits/git.svg'),
                imgWidth: 80,
            },
            {
                title: '#7 Website verification',
                href: 'https://github.com/windingtree/wt-hackathon/issues/50',
                imgSrc: require('./img/benefits/git.svg'),
                imgWidth: 80,
            },
            {
                title: '#8 Lif Loyalty',
                href: 'https://github.com/windingtree/wt-hackathon/issues/39',
                imgSrc: require('./img/benefits/community.svg'),
                imgWidth: 80,
            },
            {
                title: '#9 Tours & Activities via blockchain',
                href: 'https://github.com/windingtree/wt-hackathon/issues/51',
                imgSrc: require('./img/benefits/git.svg'),
                imgWidth: 80,
            },
            {
                title: '#10 WT vs WWW Travel',
                href: 'https://github.com/windingtree/wt-hackathon/issues/38',
                imgSrc: require('./img/benefits/community.svg'),
                imgWidth: 80,
            },
            {
                title: '#11 WT Proof of trust',
                href: 'https://github.com/windingtree/wt-hackathon/issues/32',
                imgSrc: require('./img/benefits/git.svg'),
                imgWidth: 80,
            },
        ],
    },

    videoGallery : {
        header : "What Our Hackathon Alumni Say",
        items:[
            {
                videoSrc: "vlJbLLY4_8A",
                thumbnail: require('./img/video/airfrance.jpg'),
            },
            {
                videoSrc: "lSByZkikdFY",
                thumbnail: require('./img/video/atpco.png'),
            },
            {
                videoSrc: "AEHumtp1LUQ",
                thumbnail: require('./img/video/avian.png'),
            },
            {
                videoSrc: "xa_V7wpTEN4",
                thumbnail: require('./img/video/aircanada.png'),
            },
        ]
    },
    location: {
        header:'Venue',
        text:'We’re excited to be hosting Winding Tree hackathon at Travel Forward at WTM London',
        buttonUrl:'https://travelforward.wtm.com/',
        buttonLabel:'ExCel London',
        gps:[51.5084601,0.0276573]
    },
    contacts : {
        header: 'Questions?',
        text:'Get in touch with us on Telegram, Gitter or feel free to drop our hackathon team a line via email',
        contactList:[
            {
                contactName:'Gitter',
                contactUrl:'https://gitter.im/windingtree/Lobby',
                contactImgSrc:require('./img/contacts/gitter.svg')
            },
            {
                contactName:'Telegram',
                contactUrl:'https://t.me/windingtree',
                contactImgSrc:require('./img/contacts/telegram.svg')
            },
            {
                contactName:'Email',
                contactUrl:'mailto:info@windingtree.com',
                contactImgSrc:require('./img/contacts/email.svg')
            },

        ]
    },
    hackathonProgram :{
        header: 'Hackathon Program',
        text: 'what, when and where for hackathon participants',
        buttonLabel: 'Program Details',
        buttonUrl: '/hacktravelprogram'
    },
    callToAction :{
        header : 'Ready to Join the Hackathon?',
        text : 'Contribute to moving the travel industry forward. Build open source, decentralized solutions along with airlines, hotels, travel startups and blockchain experts',
        buttonUrl: "#register",
        buttonLabel: "Register",
        buttonStyle: "btn-primary",
    },
    hackedWithUs: {
        header : "Hacking With Us",
        items : [
            {
                imgSrc: require('DATA/commons/Partners/img/etihad.svg'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/ibm.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/holidaypirates.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/accenture.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/peakwork.svg'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/siesta.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/iata.png'),
                href:''
            },
            {
                imgSrc: require('./img/partners/H1.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/searchcharter.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/basel.png'),
                href:''
            },
            {
                imgSrc: require('DATA/commons/Partners/img/cruisewatch.png'),
                href:''
            },
            

        ]
    }
}

export default Hacktravel