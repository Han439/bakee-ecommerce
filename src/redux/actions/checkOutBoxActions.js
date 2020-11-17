import { CLOSE, OPEN } from '../types/checkOutBoxType'

export const openCheckOutBox = () => ( {
    type: OPEN
} )

export const closeCheckOutBox = () => ( {
    type: CLOSE
} )
