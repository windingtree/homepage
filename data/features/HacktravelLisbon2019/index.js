
const Hacktravel = {
    header : {
        title: "#HackTravel 2019",
        subtitle:"July 3-5, Lisbon, Portugal",
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
            photo: require('./img/photos/1.jpg'),
        },
        {
            photo: require('./img/photos/2.jpg'),
        },
        {
            photo: require('./img/photos/3.jpg'),
        },
        {
            photo: require('./img/photos/4.jpg'),
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
                buttonUrl: "https://windingtree.typeform.com/to/zw5WmH",
                buttonLabel: "Apply To Get Early Bird Tickets",
                buttonStyle: "btn-primary",
                benefits: ["Learn new technology","Collaborate on solutions","Get complimentary training for your tech team","Solve your own business challenges"],
                accentedNotice: "Early Bird Tickets 250$",
                secondaryNotice: "50% off if you’re bringing your technical team to hack. Spots are limited to 50"
            },
            {
                imgSrc:require('./img/benefits/git.svg'),
                title:'Independent Developers\n& Software Companies',
                buttonUrl: "https://windingtree.typeform.com/to/zw5WmH",
                buttonLabel: "Join For Free",
                buttonStyle: "btn-primary",
                benefits: ["Form or join a team to hack","Work on proposed challenges","Bring your own hack idea","Experiment","Get mentorship"],
                accentedNotice: "Approved hackers are invited to join us at zero cost.",
                secondaryNotice: "Spots are limited to 80"
            },
            {
                imgSrc:require('./img/benefits/ota.svg'),
                title:'Travel Startups\n& OTAs',
                buttonUrl: "https://windingtree.typeform.com/to/zw5WmH",
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
        buttonUrl: "https://windingtree.typeform.com/to/zw5WmH",
        buttonLabel: "Check Sponsorship Options",
        buttonStyle: "btn-outline-dark",
    },
    videoGallery : {
        header : "What Our Hackathon Alumni Say",
        items:[
            {
                videoSrc: "https://youtu.be/vlJbLLY4_8A",
                thumbnail: require('./img/video/airfrance.jpg'),
            },
            {
                videoSrc: "https://youtu.be/lSByZkikdFY",
                thumbnail: require('./img/video/atpco.png'),
            },
            {
                videoSrc: "https://youtu.be/AEHumtp1LUQ",
                thumbnail: require('./img/video/avian.png'),
            },
            {
                videoSrc: "https://youtu.be/xa_V7wpTEN4",
                thumbnail: require('./img/video/aircanada.png'),
            },
        ]
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
    callToAction :{
        header : 'Ready to Join the Hackathon?',
        text : 'Contribute to moving the travel industry forward. Build open source, decentralized solutions along with airlines, hotels, travel startups and blockchain experts',
        buttonUrl: "#register",
        buttonLabel: "Register",
        buttonStyle: "btn-primary",
    }
}

export default Hacktravel