// @flow
import React from 'react';
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
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  }

  render() {
    const {
      imgSrc, firstLine, secondLine, text, icons,
    } = this.props;
    const { isOpened } = this.state;
    return (
      <div className="user user-items-start .mb-1 .mb-md-0">
        <MemberImage imgSrc={imgSrc} />
        <div className="user-data">
          <p className="user-name">{firstLine}</p>
          <p className="user-role">{secondLine}</p>
          <div className="user-bio">
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
