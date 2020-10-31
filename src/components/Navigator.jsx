import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import '../styles/Navigator.css';
import logo from '../images/logo.png';

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burger: false
    }
  }

  render() {
    const {burger} = this.state
    return (
    <>
      <div className="logo-container"><img src={logo} alt="logo"/> Bakee</div>
      <ul className={burger?"burger":"nav-link col-layout"}>
        <li>
          <Link to="/" className="link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            Our Store
          </Link>
        </li>
      </ul>
      <div className="bars" onClick={() => {this.setState({burger: !this.state.burger})}}>
        {
          burger?
          <i class="fas fa-times"></i>:
          <i class="fas fa-bars"></i>
        }
      </div>
    </>
    
  );
  }
  
}

export default Navigator;
