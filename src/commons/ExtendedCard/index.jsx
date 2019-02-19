/* @flow */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, Button } from '@windingtree/wt-ui-react';

class ExtendedCard extends React.Component {

    render(){
        const {data} = this.props;
        
        return (
            <Container className="extended-card card text-center">
                <Row className="py-2">
                    <Col>
                        <img src={data.imgSrc} alt={data.title} className="" style={{ width: 80 }} />
                    </Col>
                </Row>
                <Row className="card-body">
                    <Col>
                        <h3 className="text-center">{data.title}</h3>
                        <div class="card-text">
                            <ul>
                                {data.benefits.map((benefit,i) => (
                                   <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }

}
export default ExtendedCard;
