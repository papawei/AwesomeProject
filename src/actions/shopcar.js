/**
 * Created by tengwei on 16/3/24.
 */
'use strict';

import * as types from '../constants/ActionTypes';
import {ToastShort} from '../utils/ToastUtils';
import {request} from '../utils/RequestUtils';
import {DBB_SHOPCAR_LIST} from '../constants/Urls';

export function fetchShopCarList(isRefreshing, loading, isLoadMore, page) {
    if (page == undefined) {
        page = 1;
    };
    return dispatch => {
        dispatch(fetchShopCarData(isRefreshing, loading, isLoadMore));
        return request(DBB_SHOPCAR_LIST + '?page=' + page, 'get')
            .then((data) => {
                if(data.code==0)
                {
                    dispatch(receiveShopCarData(data.message));
                    
                }else {
                    
                    dispatch(receiveShopCarData([]));
                    ToastShort(data.message);
                }
                
            })
            .catch((error) => {
                dispatch(receiveShopCarData([]));
                ToastShort(error.message);
            })
    }
}

function fetchShopCarData(isRefreshing, loading, isLoadMore) {
    if (isLoadMore == undefined) {
        isLoadMore = false;
    };
    return {
        type: types.FETCH_SHOPCAR_LIST,
        isRefreshing: isRefreshing,
        loading: loading,
        isLoadMore: isLoadMore
    }
}

function receiveShopCarData(shopCarList) {
    return {
        type: types.RECEIVE_SHOPCAR_LIST,
        shopCarList: shopCarList
    }
}
