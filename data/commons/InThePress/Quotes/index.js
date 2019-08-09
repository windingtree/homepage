// @flow


type QuoteType = {
  name: string,
  text: string,
  href: string,
  imgSrc: string,
  imgWidth?: number,
  imgTopPosition?: number,
  user?: {
    name: string,
    role: string,
    imgSrc: string
  }
};

const quotes: QuoteType[] = [
  {
    name: 'Reuters',
    text: '“Winding Tree is obviously our distribution (platform) and that’s an opportunity for us to disrupt a traditionally siloed market dominated by major distribution systems,” Tristan Thomas, Etihad’s director of digital and innovation, said in a phone interview.',
    href: 'https://www.reuters.com/article/us-blockchain-airlines-etihad/emirates-etihad-partners-with-swiss-blockchain-platform-winding-tree-idUSKCN1UY2A9',
    imgSrc: require('./img/reuters-logo.png'),
    imgWidth: 180,
    imgTopPosition: -2,
  },
  {
    name: 'businessInsider',
    text: "It's very exciting, but very early. It's a simpler and cheaper distribution chain that can challenge the booking giants...",
    href: 'http://nordic.businessinsider.com/a-norwegian-hotel-billionaire-wants-to-use-blockchain-to-cut-out-expedia--/',
    imgSrc: require('./img/businessinsider.png'),
    imgWidth: 120,
    imgTopPosition: -5,
    user: {
      name: 'Lisa Farrar',
      role: 'Chief digital officer at Nordic Choice Hotels',
      imgSrc: require('./img/lisa-farrar.jpg'),
    },
  },
  {
    name: 'businesstravelnews',
    text: "Hobo Hotel Stockholm, a member of the Nordic Choice Hotels group, used Winding Tree to complete what the travel distribution platform claims is the first hotel booking on a public blockchain platform. Winding Tree said it's now ready for 'real-world usage of public blockchains.' Payments can be in the form of fiat currency, credit card or cryptocurrency in the form of ether or Winding Tree's Lif tokens.",
    href: 'https://www.businesstravelnews.com/Technology/Winding-Trees-Public-Blockchain-Platform-Ready-for-Hospitality-Bookings',
    imgSrc: require('./img/btn.png'),
    imgWidth: 150,
    imgTopPosition: -5,
  },
  {
    name: 'skift',
    text: 'What Lufthansa’s new partnership does is show how airlines and hotels might use the technology in the future to drastically reduce distribution costs. And although Lufthansa joins Air France-KLM in exploring what blockchain can do, Lufthansa has gone the furthest among airlines through its new agreement with Switzerland-based start-up Winding Tree....',
    href: 'https://skift.com/2017/10/10/lufthansa-partners-with-a-blockchain-provider-in-an-investment-worth-testing/',
    imgSrc: require('./img/skift.svg'),
    imgWidth: 90,
    imgTopPosition: -7,
  },
];

export default quotes;
