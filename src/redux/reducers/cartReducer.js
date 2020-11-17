import {
    ADD_TO_CART,
    ADD_PRODUCT_QUANTITY,
    SUBTRACT_PRODUCT_QUANTITY,
    REMOVE_FROM_CART,
    RESET_CART,
    SET_DELIVERY_FEE,
} from '../types/cartTypes'

const initialState = {
    products: [],
    subTotal: 0,
    deliveryFee: 0
}

const cartReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case ADD_TO_CART:
        let {
            products,
            subTotal,
        } = state;
        let product = action.payload
            // check if the product is already in the cart
        const item = products.find( item => item.id === product.id )
        if ( item ) return state
            // set quantity
        product.quantity = 1;
        product.fullPrice = product.quantity * product.price
        return {
            ...state,
            products: [ ...products, product ],
            subTotal: subTotal + product.price
        }

    case ADD_PRODUCT_QUANTITY:
        const addItems = state.products.map( item => {
            if ( item.id === action.payload.id ) {
                action.payload.quantity += 1
                action.payload.fullPrice += action.payload.price
                return {...action.payload }
            }
            return item
        } )

        return {
            ...state,
            products: addItems,
            subTotal: state.subTotal + action.payload.price
        }

    case SUBTRACT_PRODUCT_QUANTITY:
        let subItems = state.products.map( item => {
            if ( item.id === action.payload.id ) {
                action.payload.quantity -= 1
                action.payload.fullPrice -= action.payload.price
                return {
                    ...action.payload
                }
            }
            return item
        } )
        return {
            ...state,
            products: subItems,
            subTotal: state.subTotal - action.payload.price
        }

    case REMOVE_FROM_CART:
        return {
            ...state,
            products: state.products.filter( item => item.id !== action.payload.id ),
            subTotal: state.subTotal - action.payload.fullPrice
        }

    case RESET_CART:
        return {
            ...state,
            products: [],
            subTotal: 0,
        }

    case SET_DELIVERY_FEE:
        return {
            ...state,
            deliveryFee: action.payload
        }
    default:
        return state
    }
}

export default cartReducer
