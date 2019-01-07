/* @flow */
import React, { Component } from 'react';
import { InputGroup, Button, Form } from '@windingtree/wt-ui-react';

class Subscribe extends Component<*> {
  onSubscribe = (e: SyntheticEvent<>) => {
    e.preventDefault();
  }

  render() {
    return (
      <section className="px-md-2">
        <h3 className="mb-1 mb-md-2">
            Subscribe for updates
        </h3>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter e-mail"
            aria-label="Enter e-mail"
          />
          <InputGroup.Append>
            <Button
              href="https://windingtree.us14.list-manage.com/subscribe/post?u=93dec359c99b9871f7330768c&id=2f41b0318a"
              target="_blank"
              variant="accent"
              type="submit"
              size="lg"
              block
              onClick={this.onSubscribe}
            >
                Subscribe
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </section>
    );
  }
}

export default Subscribe;
