/**
 * Created by Administrator on 2016/3/24.
 */
'use strict';

import {combineReducers} from 'redux';
import order from './order';
import shopcar from './shopcar';

const reducer = combineReducers({
  order,shopcar
})

export default reducer;
