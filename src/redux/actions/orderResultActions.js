import {
    ORDER_SUCCESS,
    ORDER_FAIL,
    CLOSE_ORDER
} from '../types/orderResultTypes'

export const orderSuccess = () => ( {
    type: ORDER_SUCCESS
} )

export const orderFail = () => ( {
    type: ORDER_FAIL
} )

export const closeOrderBox = () => ( {
    type: CLOSE_ORDER
} )
