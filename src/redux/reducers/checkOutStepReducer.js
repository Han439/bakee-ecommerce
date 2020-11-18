import {
    INCREAMENT_STEP,
    DECREAMENT_STEP
} from '../types/checkOutStepTypes'

const initialState = 0

const checkOutStepReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case INCREAMENT_STEP:
        if ( state > 2 ) return state
        return state + 1

    case DECREAMENT_STEP:
        if ( state < 0 ) return state
        return state - 1

    default:
        return state;
    }
}

export default checkOutStepReducer
