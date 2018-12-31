/* @flow */
import React from 'react';
import { Collapse } from 'react-collapse';

type PropsType = {
  children: React$Node,
  openItem: number,
  minHeight: number
};

type StateType = {
  activeItem: number
};

class Accordion extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      activeItem: 0,
    };
  }

  componentWillMount() {
    const { openItem } = this.props;
    this.setState({
      activeItem: openItem,
    });
  }

  handleCollapseClick = (index: number) => {
    this.setState({ activeItem: index });
  }

  render() {
    const { activeItem } = this.state;
    const { children, minHeight } = this.props;
    const minHeightModified = minHeight - 40;
    return (
      <>
        {React.Children.map(children, (child, index) => {
          const config = (activeItem !== index) ? { stiffness: 90, damping: 30 } : {};
          return (
            <Collapse
              isOpened={(activeItem === index)}
              springConfig={config}
              onClick={() => this.handleCollapseClick(index)}
              style={{ minHeight: minHeightModified }}
              key={index}
            >
              {child}
            </Collapse>
          );
        })}
      </>
    );
  }
}

export default Accordion;
