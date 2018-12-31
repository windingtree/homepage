/* @flow */
import ens from './images/ens.png';

export type EventType = {
  date: string,
  month: string,
  name: string,
  location: string,
  imgSrc: string,
  text?: string,
  buttonHref?: string,
  buttonText?: string
};

export type EventsType = {
  own: EventType[],
  upcoming: EventType[],
  past: EventType[]
};

const events: EventsType = {
  own: [
    {
      date: '7-8',
      month: 'Jan',
      name: 'ENS-WT Conference',
      location: 'Tandil, Argentina',
      imgSrc: ens,
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar nibh est, quis tempus nunc pellentesque in. Sed nec risus at tellus auctor aliquam quis sed enim. Donec molestie neque sit amet rutrum faucibus. Duis vulputate eros vitae diam ornare, non porta sem suscipit. Nam a posuere metus. Phasellus faucibus eu ante sed dictum. Integer aliquam orci eu laoreet feugiat. Nulla varius velit sit amet magna venenatis iaculis. Vestibulum in diam nec augue tincidunt maximus quis non dolor. Ut luctus nisl lectus, in elementum libero accumsan ac. In lacinia id leo sit amet volutpat.',

    },
    {
      date: '7-8',
      month: 'Jan',
      name: 'ENS-WT Conference',
      location: 'Tandil, Argentina',
      imgSrc: ens,
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar nibh est, quis tempus nunc pellentesque in. Sed nec risus at tellus auctor aliquam quis sed enim. Donec molestie neque sit amet rutrum faucibus. Duis vulputate eros vitae diam ornare, non porta sem suscipit. Nam a posuere metus. Phasellus faucibus eu ante sed dictum. Integer aliquam orci eu laoreet feugiat. Nulla varius velit sit amet magna venenatis iaculis. Vestibulum in diam nec augue tincidunt maximus quis non dolor. Ut luctus nisl lectus, in elementum libero accumsan ac. In lacinia id leo sit amet volutpat.',
      buttonHref: '#',
      buttonText: 'Register now!',
    },
    {
      date: '7-8',
      month: 'Jan',
      name: 'ENS-WT Conference',
      location: 'Tandil, Argentina',
      imgSrc: ens,
      buttonHref: '#',
      buttonText: 'Register now!',
    },
  ],
  upcoming: [
    {
      date: '7-8',
      month: 'Jan',
      name: 'ENS-WT Conference',
      location: 'Tandil, Argentina',
      imgSrc: ens,
    },
    {
      date: '7-8',
      month: 'Jan',
      name: 'ENS-WT Conference',
      location: 'Tandil, Argentina',
      imgSrc: ens,
    },
  ],
  past: [
    {
      date: '7-8',
      month: 'Dec',
      name: 'ENS-WT Conference',
      location: 'Buenos Aires, Argentina',
      imgSrc: ens,
    },
  ],
};

export default events;
