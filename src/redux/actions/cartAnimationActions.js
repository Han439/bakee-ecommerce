import {
    START_CART_ANIMATION,
    END_CART_ANIMATION
} from '../types/cartAnimationTypes'

export const startCartAnimation = () => ( {
    type: START_CART_ANIMATION
} )

export const endCartAnimation = () => ( {
    type: END_CART_ANIMATION
} )
