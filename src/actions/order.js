/**
 * Created by tengwei on 16/3/24.
 */
'use strict';

import * as types from '../constants/ActionTypes';
import {ToastShort} from '../utils/ToastUtils';
import {request} from '../utils/RequestUtils';
import {DBB_ORDER_LIST} from '../constants/Urls';

export function fetchOrderList(isRefreshing, loading, orderStatus, isLoadMore, page) {
    if (page == undefined) {
        page = 1;
    };
    return dispatch => {
        dispatch(fetchOrderData(isRefreshing, loading, isLoadMore));
        return request(DBB_ORDER_LIST + '?orderStatus=' + orderStatus + '&page=' + page, 'get')
            .then((data) => {
                if(data.code==0)
                {
                    dispatch(receiveOrderData(data.message, orderStatus));
                    
                }else {
                    
                    dispatch(receiveOrderData([], orderStatus));
                    ToastShort(data.message);
                }
                
            })
            .catch((error) => {
                dispatch(receiveOrderData([], orderStatus));
                ToastShort(error.message);
            })
    }
}

function fetchOrderData(isRefreshing, loading, isLoadMore) {
    if (isLoadMore == undefined) {
        isLoadMore = false;
    };
    return {
        type: types.FETCH_ORDER_LIST,
        isRefreshing: isRefreshing,
        loading: loading,
        isLoadMore: isLoadMore
    }
}

function receiveOrderData(orderList, orderStatus) {
    return {
        type: types.RECEIVE_ORDER_LIST,
        orderList: orderList,
        orderStatus: orderStatus
    }
}