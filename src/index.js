import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const data = [
//   {name: 'red velvet cupcake', price: 2, category: 'cake', image: 'https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Redwineberrycupcake38eee3.jpg&w=500&h=500&fit=cover'},
//   {name: 'Chai Latte', price: 1, category: 'drink', image: 'https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item/public/cafe-menu/20FAL_CafeMenu_SeasonalDrinks_Chai.jpg?itok=duqQhRbG'}
// ]



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
