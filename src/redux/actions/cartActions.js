import {
    ADD_TO_CART,
    ADD_PRODUCT_QUANTITY,
    SUBTRACT_PRODUCT_QUANTITY,
    REMOVE_FROM_CART,
    RESET_CART,
    SET_DELIVERY_FEE,
} from '../types/cartTypes'

import {
    trackPromise
} from "react-promise-tracker";


export const addToCart = ( product ) => ( {
    type: ADD_TO_CART,
    payload: product
} )

export const addQuantity = ( product ) => ( {
    type: ADD_PRODUCT_QUANTITY,
    payload: product,
} )

export const subtractQuantity = ( product ) => {
    if ( product.quantity === 1 ) return removeFromCart( product )

    return {
        type: SUBTRACT_PRODUCT_QUANTITY,
        payload: product,
    }
}

export const removeFromCart = ( product ) => ( {
    type: REMOVE_FROM_CART,
    payload: product,
} )

export const resetCart = () => ( {
    type: RESET_CART
} )

/*global google*/


export const setDeliveryFee = ( feeRate, start, endAddress ) => dispatch => {

    const callback = ( response, status ) => {
        const fair = feeRate;
        if ( status !== google.maps.DistanceMatrixStatus.OK ) {
            console.log( "error" );
        } else {
            console.log( response.rows[ 0 ].elements[ 0 ].distance );
            const distance = response.rows[ 0 ].elements[ 0 ].distance.value / 1000;
            const deliver = Number( distance * fair )
                .toFixed( 2 );
            dispatch( {
                type: SET_DELIVERY_FEE,
                payload: deliver
            } )
        }
    }

    const origin = new google.maps.LatLng( ...start );
    const destination = endAddress;
    const deliveryService = new google.maps.DistanceMatrixService();
    trackPromise( deliveryService.getDistanceMatrix( {
            origins: [ origin ],
            destinations: [ destination ],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        },
        callback
    ) )
};
