/* @flow */
import React from 'react';
import { Slick } from '@windingtree/wt-ui-react';
import { contributors as devContributors, contributosToIgnore } from 'DATA/commons/Contributors';
import ScrollableAnchor from 'react-scrollable-anchor';
import DevImage from './DevImage';


type ContributorType = {
  contribitorId: number,
  login: string,
  avatar_url: string
};

type StateType = {
  contributors: ContributorType[]
};

class Contributors extends React.Component<*, StateType> {
  constructor(props: *) {
    super(props);

    this.state = {
      contributors: devContributors,
    };
  }

  render() {
    const { contributors } = this.state;
    const { id } = this.props;

    return (
      <ScrollableAnchor id={id}>
        <Slick
          autoplay
          speed={10000}
          autoplaySpeed={0}
          cssEase="linear"
          variableWidth
          pauseOnFocus
          pauseOnHover
          className="devs-marquee"
          arrows={false}
        >
          {
          contributors.map((contributor) => {
            const ignoreContrib = contributosToIgnore.find(contribitorId => contribitorId === contributor.contribitorId);
            if (ignoreContrib) return null;
            return (
              <DevImage
                key={contributor.contribitorId}
                img={contributor.avatar_url}
                name={contributor.login}
              />);
          })
        }
        </Slick>
      </ScrollableAnchor>
    );
  }
}

export default Contributors;
