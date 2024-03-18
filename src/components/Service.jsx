import React from 'react'
import {engine,brake,battery,steering,tire,logo,arrow} from '../images';
function Service() {
  return (
    <>
        <section
          className="section service has-bg-image"
          aria-labelledby="service-label"
          style={{backgroundImage: `url('./assets/images/service-bg.jpg')`,}}
        >
          <div className="container" id="SERVICES">
            <p className="section-subtitle :light" id="service-label">
              Our services
            </p>

            <h2 className="h2 section-title">
              We Provide Great Services For your Vehicle
            </h2>

            <ul className="service-list">
              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={engine}
                      width="110"
                      height="110"
                      loading="lazy"
                      alt="Engine Repair"
                    />
                  </figure>

                  <h3 className="h3 card-title">Engine Repair</h3>

                  <p className="card-text">
                    Autem velaum iure reare aenderit rui in ea roluptate esse
                    ruam moles
                  </p>

                  <a href="#" className="btn-link">Read more</a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={brake}
                      width="110"
                      height="110"
                      loading="lazy"
                      alt="Brake Repair"
                    />
                  </figure>

                  <h3 className="h3 card-title">Brake Repair</h3>

                  <p className="card-text">
                    Autem velaum iure reare aenderit rui in ea roluptate esse
                    ruam moles
                  </p>

                  <a href="#" className="btn-link">Read more</a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={tire}
                      width="110"
                      height="110"
                      loading="lazy"
                      alt="Tire Repair"
                    />
                  </figure>

                  <h3 className="h3 card-title">Tire Repair</h3>

                  <p className="card-text">
                    Autem velaum iure reare aenderit rui in ea roluptate esse
                    ruam moles
                  </p>

                  <a href="#" className="btn-link">Read more</a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={battery}
                      width="110"
                      height="110"
                      loading="lazy"
                      alt="Battery Repair"
                    />
                  </figure>

                  <h3 className="h3 card-title">Battery Repair</h3>

                  <p className="card-text">
                    Autem velaum iure reare aenderit rui in ea roluptate esse
                    ruam moles
                  </p>

                  <a href="#" className="btn-link">Read more</a>
                </div>
              </li>

              <li className="service-banner">
                <img
                  src={logo}
                  width="646"
                  height="380"
                  loading="lazy"
                  alt="Red Car"
                  className="move-anim"
                />
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={steering}
                      width="110"
                      height="110"
                      loading="lazy"
                      alt="Steering Repair"
                    />
                  </figure>

                  <h3 className="h3 card-title">Steering Repair</h3>

                  <p className="card-text">
                    Autem velaum iure reare aenderit rui in ea roluptate esse
                    ruam moles
                  </p>

                  <a href="#" className="btn-link">Read more</a>
                </div>
              </li>
            </ul>

            <a href="#" className="btn">
              <span className="span">View All Services</span>

              <img src={arrow} alt="arrow" width="30px" />
            </a>
          </div>
        </section>
    </>
  )
}

export default Service
