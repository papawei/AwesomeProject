/**
 * Created by tengwei on 16/3/24.
 */
'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    isRefreshing: false,
    loading: false,
    isLoadMore: false,
    noMore: false,
    orderList: {}
}

export default function order(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ORDER_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            });
        case types.RECEIVE_ORDER_LIST:
            return Object.assign({}, state, {
                isRefreshing: false,
                isLoadMore: false,
                noMore: action.orderList.length == 0,
                orderList: state.isLoadMore ? loadMore(state, action) : combine(state, action),
                loading: state.orderList[action.orderStatus] == undefined
            });
        default:
            return state;
    }
}

function combine(state, action) {
    state.orderList[action.orderStatus] = action.orderList
    return state.orderList;
}

function loadMore(state, action) {
    state.orderList[action.orderStatus] = state.orderList[action.orderStatus].concat(action.orderList)
    return state.orderList;
}