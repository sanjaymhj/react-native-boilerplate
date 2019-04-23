import { connect } from 'react-redux';

import Login from './Login';

import * as loginActions from '../../actions/login';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
