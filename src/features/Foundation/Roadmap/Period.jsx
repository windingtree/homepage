/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* @flow */
import React from 'react';
import {
  Row, Col,
} from '@windingtree/wt-ui-react';
import Collapse from 'react-collapse';
import classNames from 'classnames';
import Group from './Group';
import type { PeriodType } from 'DATA/features/Foundation/Roadmap';

type StateType = {
  isOpened: boolean
};

class Period extends React.Component<PeriodType, StateType> {
  constructor(props: PeriodType) {
    super(props);
    this.state = {
      isOpened: props.isOpened,
    };
  }

  handleCollapseClick = () => {
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  }

  render() {
    const {
      firstLine, secondLine, thirdLine, groups, currentPeriod,
    } = this.props;
    const { isOpened } = this.state;
    const buttonClassName = classNames(
      'mdi',
      'mdi-36px',
      {
        'mdi-minus-circle-outline': isOpened,
        'mdi-plus-circle': !isOpened,
      },
    );

    return (
      <div className="roadmap__item">
        <header className="roadmap__header">
          <Row>
            <Col className="col-12 text-center">
              <h2 className="mb-0">{firstLine}</h2>
              <div className="lead text-muted mb-0">{secondLine}</div>
              <div className="badge badge-light text-lg mb-1">{thirdLine}</div>
              <div className="roadmap__toggle">
                <a className="text-primary" role="button" tabIndex={0} onClick={this.handleCollapseClick}>
                  <i className={buttonClassName} />
                </a>
              </div>
            </Col>
          </Row>
        </header>
        <div className="roadmap__body">
          <Collapse isOpened={isOpened}>
            <div className="roadmap__body__content">
              <Row>
                {groups.map(group => (
                  <Col lg={group.main ? 4 : 4} key={`${firstLine}-${group.title}`}>
                    <Group {...group} muted={!currentPeriod} />
                  </Col>
                ))}
              </Row>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Period;
