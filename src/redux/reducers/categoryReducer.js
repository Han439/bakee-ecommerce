import {
    CAKE,
    DRINK
} from '../types/categoryTypes';

const initialState = CAKE

const categoryReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case CAKE:
        return state = CAKE
    case DRINK:
        return state = DRINK
    default:
        return state
    }
}

export default categoryReducer
