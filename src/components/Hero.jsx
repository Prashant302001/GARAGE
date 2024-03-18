import React from 'react'
import {shop,arrow} from '../images'
function Hero() {
  return (
    <>
        <section
          className="hero has-bg-image"
          aria-label="home"
          style={{backgroundImage: `url('./assets/images/hero-bg.jpg')`,}}
        >
          <div className="container">
            <div className="hero-content">
              <p className="section-subtitle :dark">
                We have talented engineers & mechanics
              </p>

              <h1 className="h1 section-title">
                Auto Maintenance & Repair Service
              </h1>

              <p className="section-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                Excepteur sint occaecat cupidatat non proident.
              </p>

              <a href="#SERVICES" className="btn" >
                <span className="span">Our Services</span>

                <img src={arrow} alt="arrow" width="30px" />
              </a>
            </div>

            <figure className="hero-banner" style={{width: 122}}>
              <img
                src={shop}
                width="1228"
                height="789"
                alt="red motor vehicle"
                className="move-anim"
              />
            </figure>
          </div>
        </section>
    </>
  )
}

export default Hero
