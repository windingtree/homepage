// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Member from './Member';


const Team = ({ data, id }: *) => (
  <ScrollableAnchor id={id}>
    <article className="app-section section-team" id="Team">
      <Container>
        <header className="mb-2 mb-md-4 text-center">
          <h2>{data.header}</h2>
        </header>
        <Row className="justify-content-center justify-content-md-start">
          {data.items.map(memberData => (
            <Col sm={9} md={6} lg={4} className="col-12" key={memberData.firstLine}>
              <Member {...memberData} />
            </Col>
          ))}
        </Row>
      </Container>
    </article>
  </ScrollableAnchor>
);

export default Team;
