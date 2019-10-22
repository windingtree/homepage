/* @flow */
import React from 'react';
import { InputGroup, Button, Form } from '@windingtree/wt-ui-react';

const Subscribe = () => (
  <section className="px-md-2">
    <h3 className="mb-1 mb-md-2">
        Subscribe for updates
    </h3>
    <div className="cover-btn">
      <Button
        href="https://cdn.forms-content.sg-form.com/fe31f6ca-f418-11e9-8553-deef8f8d9bbd"
        target="_blank"
        type="buton"
        title="Click to subscribe"
      >
        Subscribe Form
      </Button>
      <InputGroup className="mb-2 mb-md-0">
        <Form.Control
          placeholder="Enter e-mail"
          aria-label="Enter e-mail"
        />
        <InputGroup.Append>
          <Button
            href="https://cdn.forms-content.sg-form.com/fe31f6ca-f418-11e9-8553-deef8f8d9bbd"
            target="_blank"
            variant="accent"
            type="submit"
            size="lg"
            block
            title="Click to subscribe"
          >
            Subscribe
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  </section>
);

export default Subscribe;
