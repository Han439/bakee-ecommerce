import React from 'react';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';
import '../styles/Banner.css';
import banner1 from '../images/banner/banner1.jpg';
import banner2 from '../images/banner/banner2.jpg';
import banner3 from '../images/banner/banner3.jpg';



class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.slideRef = React.createRef();
    this.state = {
      current: 0
    };
  }

  render() {
    const banners = [banner1, banner2, banner3]
    const properties = {
        duration: 3500,
        autoplay: true,
        transitionDuration: 1000,
        arrows: false,
        infinite: true,
        easing: "ease",
        indicators: () => <div className="indicator"></div>
      };
    return (
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
              <img src={banners[0]} alt="banner" />
          </div>
          <div className="each-fade">
              <img src={banners[1]} alt="banner" />
          </div>
          <div className="each-fade">
              <img src={banners[2]} alt="banner"/>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Banner;
