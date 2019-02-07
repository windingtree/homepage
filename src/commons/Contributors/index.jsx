/* @flow */
import React from 'react';
import { Slick } from '@windingtree/wt-ui-react';
import { contributors as devContributors, contributosToIgnore } from 'DATA/commons/Contributors';
import DevImage from './DevImage';

type ContributorType = {
  id: number,
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
    return (
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
            const ignoreContrib = contributosToIgnore.find(id => id === contributor.id);
            if (ignoreContrib) return null;
            return (
              <DevImage
                key={contributor.id}
                img={contributor.avatar_url}
                name={contributor.login}
              />);
          })
        }
      </Slick>
    );
  }
}

export default Contributors;
