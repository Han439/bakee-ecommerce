import React from 'react';
import '../App.css';


class AppLayout extends React.Component {

  render() {
    return (
      <>
      <div class="main-layout">
        <div className="main">
          <div className="nav-container col-layout">
            {this.props.nav}
          </div>
          <div className="category-layout">
            {this.props.side}
          </div>
          <div className="menu-section scroll-bar scroll-bar-transparent">
            {this.props.main}
          </div>
        </div>
        {this.props.cart}
      </div>
      </>
    );
  };
};

export default AppLayout;
