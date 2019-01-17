// @flow
import React from 'react';
import scrollToElement from 'scroll-to-element';
import { withRouter } from 'react-router-dom';

import type { ContextRouter } from 'react-router-dom';

class ScrollToTop extends React.Component<ContextRouter> {
  componentDidMount() {
    this.jumpToHashIfNedded();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
    this.jumpToHashIfNedded();
  }

  jumpToHashIfNedded = () => {
    const { location: { hash } } = this.props;
    if (hash) {
      scrollToElement(hash, { offset: -120 });
    }
  }


  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
