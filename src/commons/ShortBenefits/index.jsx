import React from 'react';
import {
    Container,
    Row,
    Col,
    Image,
} from '@windingtree/wt-ui-react';

class ShortBenefits extends React.Component {

    render() {
        const { data } = this.props

        return (

            <section className="app-section pb-0 px-4">
                    <Row className="justify-content-center px-2 pt-4">

                        {data.map((benefit,i) => (
                            <Col sm={12} lg={3} className="text-center" key={i}>
                                <Image src={benefit.imgSrc} alt={benefit.header} fluid width="100" />
                                <h3 className="my-1 mt-md-2 mb-md-1 text-muted">{benefit.header}</h3>
                            </Col>
                        ))}
                        
                    </Row>    

            </section>

        )

    }

}

export default ShortBenefits;