import {
    START_CART_ANIMATION,
    END_CART_ANIMATION
} from '../types/cartAnimationTypes'

const initialState = false

const cartAnimationReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

    case START_CART_ANIMATION:
        return true

    case END_CART_ANIMATION:
        return false

    default:
        return state
    }
}

export default cartAnimationReducer
