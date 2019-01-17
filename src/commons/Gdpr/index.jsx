/* @flow */
import React from 'react';
import {
  Container, Alert,
} from '@windingtree/wt-ui-react';
import Cookies from 'universal-cookie';

const COOKIE = 'isGdprReaded';

class Gdpr extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();

    this.state = {
      cookies,
      show: false,
    };
  }

  componentDidMount() {
    const { cookies } = this.state;
    const gdpr = cookies.get(COOKIE);
    this.setState({ show: !gdpr });
  }

  handleOnClose = () => {
    const { cookies } = this.state;
    cookies.set(COOKIE, true, { path: '/' });
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    console.log('show in render', show);
    return (
      <Alert
        show={show}
        variant="info"
        dismissible
        onClose={this.handleOnClose}
        className="alert-announce"
        role="announcement"
      >
        <Container>
          <p>
            Winding Tree uses cookies to enhance your experience. We use these for advertising
            and analytics purposes. By continuing to use our site, you agree to our
            <Alert.Link href="https://www.windingtree.com/cookiepolicy.pdf">
              use of cookies
            </Alert.Link>
            .
          </p>
        </Container>
      </Alert>
    );
  }
}
export default Gdpr;
