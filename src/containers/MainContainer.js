'use strict';

import React from 'react-native';
const {
  Component
} = React;
// import {connect} from 'react-redux';
import MainScreen from '../pages/MainScreen';

class MainContainer extends Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <MainScreen {...this.props} />
    );
  }
}
//
// function mapStateToProps(state) {
//   const {dbb} = state;
//   return {
//     dbb
//   }
// }
//
// export default connect(mapStateToProps)(MainContainer);
export default MainContainer;

