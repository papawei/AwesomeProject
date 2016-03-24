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
    shopCarList: {}
}

export default function shopCar(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SHOPCAR_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                loading: action.loading,
                isLoadMore: action.isLoadMore
            });
        case types.RECEIVE_SHOPCAR_LIST:
            return Object.assign({}, state, {
                isRefreshing: false,
                isLoadMore: false,
                noMore: action.shopCarList.length == 0,
                shopCarList: state.isLoadMore ? loadMore(state, action) : combine(state, action),
                loading: false,
            });
        default:
            return state;
    }
}

function combine(state, action) {
    state.shopCarList = action.shopCarList
    return state.shopCarList;
}

function loadMore(state, action) {
    state.shopCarList = state.shopCarList.concat(action.shopCarList)
    return state.shopCarList;
}
