// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import type { TeamMemberType } from 'DATA/commons/Team';
import Member from './Member';

type PropsType = {
  title: string,
  members: TeamMemberType[]
};

const Team = ({ title, members }: PropsType) => (
  <article className="app-section section-team" id="Team">
    <Container>
      <header className="mb-2 mb-md-4 text-center">
        <h2>{title}</h2>
      </header>
      <Row className="justify-content-center justify-content-md-start">
        {members.map(memberData => (
          <Col sm={9} md={6} lg={4} className="col-12" key={memberData.firstLine}>
            <Member {...memberData} />
          </Col>
        ))}
      </Row>
    </Container>
  </article>
);

export default Team;
