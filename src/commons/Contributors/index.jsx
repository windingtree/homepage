/* @flow */
import React from 'react';
import {
  Slick, Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
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
    const { id, data } = this.props;

    return (

      <ScrollableAnchor id={id}>

        <section className="app-section pt-0">
          <header className="mb-2 mb-md-4 text-center">
            <h2 className="mb-1 text-center">{data.header}</h2>
          </header>
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
            const ignoreContrib = contributosToIgnore.find(
              contribitorId => contribitorId === contributor.contribitorId,
            );
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
          {data.mainCTAUrl
                    && (
                    <Container className="pt-2">
                      <Row>
                        <Col sm={12}>
                          <footer className="text-center">
                            <Button
                              href={data.mainCTAUrl}
                              variant="dark"
                              outlined
                            >
                              {data.mainCTALabel}
                            </Button>
                          </footer>
                        </Col>
                      </Row>

                    </Container>
                    )}
        </section>
      </ScrollableAnchor>
    );
  }
}

Contributors.defaultProps = {
  data: {
    header: 'Contributors',
  },
  id: 'contributors',
};

export default Contributors;
