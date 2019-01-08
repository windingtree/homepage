// @flow
import React from 'react';
import { Button } from '@windingtree/wt-ui-react';
import { Collapse } from 'react-collapse';
import MemberImage from './MemberImage';
import Icons from './Icons';
import type { TeamMemberType } from './data';

type StateType = {
  isOpened: boolean
};

class Member extends React.Component<TeamMemberType, StateType> {
  constructor(props: TeamMemberType) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  handleCollapseClick = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  }

  render() {
    const {
      imgSrc, firstLine, secondLine, text, icons,
    } = this.props;
    const { isOpened } = this.state;
    return (
      <div className="user user-items-start">
        <MemberImage imgSrc={imgSrc} />
        <div className="user-data">
          <p className="user-name">{firstLine}</p>
          <p className="user-role">{secondLine}</p>
          <div className="user-bio text-left m-0">
            <button className="text-link" type="button" aria-expanded="false" aria-controls="userCollapse" onClick={this.handleCollapseClick}>bio</button>
            <Collapse isOpened={isOpened}>
              <p>{text}</p>
            </Collapse>
          </div>
          { icons && <Icons icons={icons} />}
        </div>
      </div>
    );
  }
}

export default Member;
