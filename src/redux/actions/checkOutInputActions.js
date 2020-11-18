import {
    CHANGE_INPUT_FIELD
} from '../types/checkOutInputTypes'

export const handleInputChange = ( name, value ) => ( {
    type: CHANGE_INPUT_FIELD,
    name,
    value
} )
