import {
    ADD_TO_CART,
    ADD_PRODUCT_QUANTITY,
    SUBTRACT_PRODUCT_QUANTITY,
    REMOVE_FROM_CART,
    RESET_CART,
    SET_DELIVERY_FEE,
} from '../types/cartTypes'

export const addToCart = ( product ) => ( {
    type: ADD_TO_CART,
    payload: product
} )

export const addQuantity = ( product ) => ( {
    type: ADD_PRODUCT_QUANTITY,
    payload: product,
} )

export const subtractQuantity = ( product ) => {
    if ( product.quantity === 1 ) return removeFromCart( product )

    return {
        type: SUBTRACT_PRODUCT_QUANTITY,
        payload: product,
    }
}

export const removeFromCart = ( product ) => ( {
    type: REMOVE_FROM_CART,
    payload: product,
} )

export const resetCart = () => ( {
    type: RESET_CART
} )

export const setDeliveryFee = ( fee ) => ( {
    type: SET_DELIVERY_FEE,
    payload: fee
} )
