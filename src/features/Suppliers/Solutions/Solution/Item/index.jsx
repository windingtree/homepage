/* @flow */
import React from "react";
import { Row, Col } from "@windingtree/wt-ui-react";

type PropsType = {
    children: React$Node
};

const SolutionItem = (props: PropsType) => {
    const { title, children } = props;
    return (
        <React.Fragment>
            <h3>{title}</h3>
            <p className="mb-2">{children}</p>
        </React.Fragment>
    );
};

SolutionItem.defaultProps = {
    inverted: false
};

export default SolutionItem;
