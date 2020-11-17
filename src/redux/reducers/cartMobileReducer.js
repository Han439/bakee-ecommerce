import {
    OPEN_CART_MOBILE,
    CLOSE_CART_MOBILE
} from '../types/cartMobileTypes'

const initialState = false

const cartMobileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case OPEN_CART_MOBILE:
        return true

    case CLOSE_CART_MOBILE:
        return false

    default:
        return state
    }
}

export default cartMobileReducer
