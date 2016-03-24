'use strict';

import React from 'react-native';
const {
  Component
} = React;
import {connect} from 'react-redux';
import Main from '../pages/Main';

class MainContainer extends Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const {dbb} = state;
  return {
    dbb
  }
}

export default connect(mapStateToProps)(MainContainer);
