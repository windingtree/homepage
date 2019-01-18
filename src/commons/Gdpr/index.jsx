/* @flow */
import React from 'react';
import {
  Container, Alert,
} from '@windingtree/wt-ui-react';
import Cookies from 'universal-cookie';
import './styles.scss';

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
    return (
      <Alert
        show={show}
        variant="info"
        dismissible
        onClose={this.handleOnClose}
        className="alert-announce"
      >
        <Container>
          <p>
            This site uses its own cookies and third-party cookies to gather information on your browsing for statistical purposes. If you continue browsing, we consider that you accept its use and&#8195; 
            <Alert.Link href="https://www.windingtree.com/CookiePolicy.pdf">
               Winding&nbsp;Tree&nbsp;cookie&nbsp;policy
            </Alert.Link>
          </p>
        </Container>
      </Alert>
    );
  }
}
export default Gdpr;
