import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';
import orderResultReducer from './orderResultReducer';
import cartReducer from './cartReducer';
import cartMobileReducer from './cartMobileReducer';
import cartAnimationReducer from './cartAnimationReducer';
import checkOutBoxReducer from './checkOutBoxReducer';
import checkOutInputReducer from './checkOutInputReducer';
import checkOutStepReducer from './checkOutStepReducer'

const rootReducer = combineReducers( {
    category: categoryReducer,
    menu: menuReducer,
    cart: cartReducer,
    result: orderResultReducer,
    displayCheckOut: checkOutBoxReducer,
    displayCartMobile: cartMobileReducer,
    cartAnimation: cartAnimationReducer,
    checkOutInput: checkOutInputReducer,
    checkOutStep: checkOutStepReducer,
} )

export default rootReducer
