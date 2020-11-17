import {
    OPEN_CART_MOBILE,
    CLOSE_CART_MOBILE
} from '../types/cartMobileTypes'

export const closeCart = () => ( {
    type: CLOSE_CART_MOBILE
} )

export const openCart = () => ( {
    type: OPEN_CART_MOBILE
} )
