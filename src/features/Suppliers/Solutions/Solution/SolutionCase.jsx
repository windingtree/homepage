/* @flow */
import React from 'react';
import {
  Row, Col, Image,
} from '@windingtree/wt-ui-react';

type PropsType = {
  imgSrc: string,
  imgAlt: string,
  href: string,
  children: React$Node
};

const SolutionCase = (props: PropsType) => {
  const {
    imgSrc, href, children, imgAlt,
  } = props;
  return (
    <section className="pb-2 pb-md-3 mb-2 mb-md-3 border-bottom">
      <h6 className="mb-1 font-weight-bold small text-uppercase text-center text-md-left">
        Case study
      </h6>
      <div className="solutions__cases">
        <Row>
          <Col md={6}>
            <a href={href} className="d-block my-1 partner">
              <figure className="text-center text-md-left figure">
                <Image src={imgSrc} alt={imgAlt} fluid className="figure-img" />
                <figcaption className="figure-caption mt-1">
                  {children}
                </figcaption>
              </figure>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SolutionCase;
