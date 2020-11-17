import { CLOSE, OPEN } from '../types/checkOutBoxType'

const initialState = false

const checkOutBoxReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case OPEN:
        return true
    case CLOSE:
        return false
    default:
        return state
    }
}

export default checkOutBoxReducer
