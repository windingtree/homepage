/* @flow */
import React from "react";
import Item from "./Item";

type PropsType = {
    children: React$Node
};
const Solution = (props: PropsType) => {
    const { children } = props;
    return <div className="solutions__sections">{children}</div>;
};

Solution.Item = Item;

export default Solution;
