/* eslint-disable import/prefer-default-export */
/* @flow */

const Footer = {
    Logo : {
        LogoSm: {
            img: "https://windingtree.com/assets/img/logo/sm-white.svg",
            alt: "Winding Tree"
        },
        LogoMd: {
            img: "https://windingtree.com/assets/img/logo/md-white.svg",
            alt: "Winding Tree"
        },
    },
    Copyright: {
        text: "Terms of service",
        link: "/TermsOfService.pdf"
    },
    Columns : [
        {
          title: 'Solutions',
          links: [ 
            {
              href: '/suppliers',
              text: 'For travel suppliers',
            },
            {
              href: '/sellers',
              text: 'For sellers of travel',
            },
            {
              href: '/software-vendors',
              text: 'For software vendors',
            },
          ],
        },
        {
          title: 'Foundation',
          links: [ 
            {
              href: '/Foundation#about',
              text: 'About',
            },
            {
              href: '/Foundation#team',
              text: 'Team',
            },
            {
              href: '/Foundation#events',
              text: 'Events',
            },
            {
              href: '/Foundation#services',
              text: 'Services',
            },
            {
              href: '/Foundation#roadmap',
              text: 'Roadmap',
            },
            {
              href: '/White_Paper_EN.pdf',
              text: 'White Paper',
            },
          ],
        },
        {
          title: 'Community',
          links: [ 
            {
              href: '/startups-and-developers',
              text: 'Community welcome page',
            },
            {
              href: 'https://developers.windingtree.com/',
              text: 'Developer portal',
            },
            {
              href: 'https://github.com/windingtree/wiki',
              text: 'Join us on GitHub',
            },
          ],
        },
        {
            title: 'Contacts',
            links:[
                {
                    text:'Gubelstrasse 11, 6300 Zug, Switzerland'
                },
                {
                    href:'mailto:info@windingtree.com',
                    text:'info@windingtree.com'
                }

            ]
        }
    ]

};

export default Footer;
