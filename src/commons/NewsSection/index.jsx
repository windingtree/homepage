// @flow
import React from 'react';
import {
  Row, Col, Container, Button,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ArticleCard from 'commons/ArticleCard';
import defaultData from 'DATA/commons/NewsSection';

const NewsSection = (props: *) => {
  const { data, id } = props;
  return (
    <ScrollableAnchor id={id}>

      <div className="app-section">
        <Container>

          <Row className="my-3 mb-2 mb-md-2 justify-content-center">
            <Col>
              <h2 className="text-center">{data.header}</h2>
            </Col>
          </Row>

          <Row className="justify-content-center pb-2 pb-lg-0">
            {data.items.map(article => (
              <Col md={4} className="px-0">
                <ArticleCard articleItem={article} />
              </Col>
            ))}
          </Row>

          {data.buttonUrl
                      && (
                      <Row className="justify-content-center">
                        <Button href={data.buttonUrl} className={`mt-0 mt-lg-3 ${data.buttonStyle}`}>{data.buttonLabel}</Button>
                      </Row>
                      ) }


        </Container>
      </div>
    </ScrollableAnchor>
  );
};

NewsSection.defaultProps = {
  id: 'news',
  data: defaultData,
};

export default NewsSection;
