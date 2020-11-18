import {
    INCREAMENT_STEP,
    DECREAMENT_STEP
} from '../types/checkOutStepTypes'

export const increaseStep = () => ( {
    type: INCREAMENT_STEP
} )

export const decreaseStep = () => ( {
    type: DECREAMENT_STEP
} )
