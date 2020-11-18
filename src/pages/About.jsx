import React from "react";
import "../App.css";
import AppLayout from "../hocs/AppLayout";
import Navigator from "../components/Navigator";

function About() {
  return (
    <>
      <AppLayout
        nav={<Navigator />}
        side={null}
        main={
          <div className="info-box">
            <h2 className="heading">Bakee Bakery</h2>
            <ul className="store-info">
              <li>
                <i class="fas fa-map-marker-alt" /> 101 Tran Hung Dao, Pham Ngu
                Lao, District 1, Ho Chi Minh
              </li>
              <li>
                <i class="fas fa-phone"></i> +84282288226
              </li>
              <li>
                <i class="fas fa-envelope"></i> bakee.store@gmail.com
              </li>
            </ul>
            <h3 className="heading">Opening</h3>
            <ul className="opening-info">
              <li>
                <i class="fas fa-calendar-check"></i> Monday - Sunday
              </li>
              <li>
                <i class="fas fa-clock"></i> 9 a.m - 10 p.m
              </li>
            </ul>
          </div>
        }
        cart={null}
      />
    </>
  );
}

export default About;
