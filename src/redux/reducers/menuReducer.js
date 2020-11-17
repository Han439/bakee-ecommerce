import { FETCH_MENU_DATA } from '../types/menuTypes'

const initialState = []

const menuReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case FETCH_MENU_DATA:
        return state = action.payload
    default:
        return state
    }
}

export default menuReducer
