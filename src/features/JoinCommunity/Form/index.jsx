/* @flow */
import React from 'react';
import Header from './Header';
import FormInput from './FormInput';

type StateType = {
  firstName: string,
  lastName: string,
  email: string,
  country: string,
  ideas: string,
  radio: string
};

class Form extends React.Component<*, StateType> {
  onFirstNameChange = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    const firstName = e.currentTarget.value;
    this.setState({ firstName });
  }

  onLastNameChange = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    const lastName = e.currentTarget.value;
    this.setState({ lastName });
  }

  onEmailChange = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;
    this.setState({ email });
  }

  onCounrtyChange = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    const country = e.currentTarget.value;
    this.setState({ country });
  }

  onIdeasChange = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    const ideas = e.currentTarget.value;
    this.setState({ ideas });
  }

  onRadiosChange = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    const radio = e.currentTarget.value;
    this.setState({ radio });
  }

  onSubmit = (e: SyntheticMouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      firstName, lastName, email, country, ideas, radio,
    } = this.state;

    // eslint-disable-next-line no-console
    console.log({
      firstName, lastName, email, country, ideas, radio,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <FormInput
          onFirstNameChange={this.onFirstNameChange}
          onLastNameChange={this.onLastNameChange}
          onEmailChange={this.onEmailChange}
          onCounrtyChange={this.onCounrtyChange}
          onIdeasChange={this.onIdeasChange}
          onRadiosChange={this.onRadiosChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default Form;
