import { FETCH_MENU_DATA } from '../types/menuTypes'
import axios from "axios";


const fetchMenuData = () => dispatch => {
    axios.default.headers = {
        "Content-Type": "application/json",
    };
    axios
        .get( "http://127.0.0.1:8000/api/product/" )
        .then( ( response ) => {
            dispatch( {
                type: FETCH_MENU_DATA,
                payload: response.data
            } )
        } )
        .catch( ( error ) => console.log( error ) );
}

export default fetchMenuData
