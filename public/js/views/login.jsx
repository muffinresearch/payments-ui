import React, { Component, PropTypes } from 'react';

import Spinner from 'components/spinner';

import { gettext } from 'utils';
import tracking from 'tracking';


export default class Login extends Component {

  static propTypes = {
    accessToken: PropTypes.string.isRequired,
    tokenSignIn: PropTypes.func.isRequired,
  };

  componentDidMount() {
    tracking.setPage('/login');
    this.props.tokenSignIn(this.props.accessToken);
  }

  render() {
    return <Spinner text={gettext('Signing in')}/>;
  }

}
