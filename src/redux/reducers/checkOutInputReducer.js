import {
    CHANGE_INPUT_FIELD,
    VALIDATE_INPUT
} from '../types/checkOutInputTypes'

const initialState = {
    name: '',
    phone: '',
    mail: '',
    address: '',
    error: {
        name: '',
        phone: '',
        mail: '',
        address: '',
    }
}

const checkOutInputReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case CHANGE_INPUT_FIELD:
        return {
            ...state,
                [ action.name ]: action.value,
            error: {...state.error }
        }

    case VALIDATE_INPUT:
        return state

    default:
        return state
    }
}

export default checkOutInputReducer
