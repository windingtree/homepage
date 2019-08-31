import CTAs from 'DATA/commons/CTAs'

const MainMenu={
    menuItems: [
        { title : 'Solutions',
          items : [ 
            {
                title: 'For Suppliers',
                link: '/suppliers'
            },
            {
                title: 'For Sellers',
                link: '/sellers'
            },
            {
                title: 'For Software Vendors',
                link: '/software-vendors'
            },

          ]
        },
        {
            title: 'Docs',
            link:'https://developers.windingtree.com'
        },
        { title : 'Foundation',
          items : [ 
            {
                title: 'About',
                link: '/foundation#about'
            },
            {
                title: 'Team',
                link: '/foundation#team'
            },
            {
                title: 'Events',
                link: '/foundation#events'
            },
            {
                title: 'Services',
                link: '/foundation#services'
            },
            {
                title: 'Roadmap',
                link: '/foundation#roadmap'
            },
            {
                title: 'Blog',
                link: 'https://blog.windingtree.com'
            },
          ]
        },
        {
            title: 'Community',
            link:'/startups-and-developers'
        }
    ],
    ctaButton: {
        title: 'Join',
        link: CTAs.topMenuCta
    }
}

export default MainMenu