/* @flow */
import React from "react";
import { Button, Row, Col } from "@windingtree/wt-ui-react";
import Solution from "../Solution";
import Polygon from "./Polygon";

const Hospitality = () => (
    <Solution>
        <Row className="d-flex align-items-center mb-2">
            <Col md="6" lg="7" className="mb-1 mb-sm-0">
                <Solution.Item title="Airlines">
                    Lower your distribution and transactional cost by using new
                    commission-free distribution channel, more reliable than any
                    major GDS.
                </Solution.Item>
                <Button
                    href="https://github.com/windingtree/"
                    className="btn-accent mb-1 mb-sm-0 mb-md-1 mb-lg-0 mr-sm-1 d-block d-sm-inline-block"
                >
                    Apply for integration
                </Button>
                <Button
                    href="https://github.com/windingtree/"
                    className="btn-outline-dark d-block d-sm-inline-block"
                >
                    Use cases
                </Button>
            </Col>
            <Col md="6" lg="5" className="text-center text-md-left">
                <Polygon />
            </Col>
        </Row>
    </Solution>
);

export default Hospitality;
