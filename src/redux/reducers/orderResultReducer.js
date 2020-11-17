import {
    ORDER_SUCCESS,
    ORDER_FAIL,
    CLOSE_ORDER
} from '../types/orderResultTypes'

const initialState = {
    displayResult: false,
    isSuccess: false
}

const orderResultReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case ORDER_SUCCESS:
        return {
            displayResult: true,
            isSuccess: true
        }
    case ORDER_FAIL:
        return {
            displayResult: true,
            isSuccess: false
        }
    case CLOSE_ORDER:
        return {
            ...state,
            displayResult: false
        }
    default:
        return state
    }
}

export default orderResultReducer
