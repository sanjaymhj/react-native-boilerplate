import _get from 'lodash.get';
import { connect } from 'react-redux';

import Welcome from './Welcome';

function mapStateToProps(state) {
  return { auth: _get(state, 'auth.auth', {}) };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
