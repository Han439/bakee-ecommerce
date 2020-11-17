import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import orderResultReducer from './orderResultReducer';
import checkOutBoxReducer from './checkOutBoxReducer';
import cartMobileReducer from './cartMobileReducer';
import cartAnimationReducer from './cartAnimationReducer'

const rootReducer = combineReducers( {
    category: categoryReducer,
    menu: menuReducer,
    cart: cartReducer,
    result: orderResultReducer,
    displayCheckOut: checkOutBoxReducer,
    displayCartMobile: cartMobileReducer,
    cartAnimation: cartAnimationReducer,
} )

export default rootReducer
