import React, { Component } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { usePromiseTracker } from 'react-promise-tracker';

import '../styles/CheckOut.css';

export const Loader = (props) => {
    const { promiseInProgress } = usePromiseTracker()
    return (
        promiseInProgress &&
        (<div className="checkout-layout">
            <div class="loader">
                <ScaleLoader 
                    css='' 
                    height={40} 
                    width={4} 
                    radius={2} 
                    margin={2} 
                    color={'#ffb367'} 
                    loading={true}
                />
            </div>
        </div>)
        )
    }

export default Loader
