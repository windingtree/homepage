/* @flow */
import React from 'react';
import {
  Container,
} from '@windingtree/wt-ui-react';
import { roadmapData } from 'DATA/commons/Roadmap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Period from './Period';

const Roadmap = (props: *) => {
  const { id } = props;
  return (
    <ScrollableAnchor id={id}>

      <article className="app-section section-roadmap border-bottom border-light" id="Roadmap">
        <Container>
          <header className="mb-2 mb-md-4 text-center">
            <h2>Roadmap</h2>
          </header>
        </Container>
        <Container>
          {roadmapData.map(period => (
            <Period {...period} key={`${period.firstLine}-${period.secondLine}`} />
          ))}
        </Container>
      </article>
    </ScrollableAnchor>
  );
};
export default Roadmap;
