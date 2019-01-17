// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Member from './Member';

type PropsType = {
  title: string,
  members: string[]
};
const Team = ({ title, members }: PropsType) => (
  <article className="app-section section-features pt-2 pt-lg-3" id="Team">
    <Container>
      <header>
        <Row className="justify-content-md-center">
          <Col md={10} className="text-center mb-1">
            <h2>{title}</h2>
          </Col>
        </Row>
      </header>
      <Row>
        {members.map(memberData => (
          <Col md={4} className="mb-md-4" key={memberData.firstLine}>
            <Member {...memberData} />
          </Col>
        ))}
      </Row>
    </Container>
  </article>
);

export default Team;
