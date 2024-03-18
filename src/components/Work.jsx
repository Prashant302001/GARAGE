import React from 'react'
import {bike,car,bus,arrow} from '../images'
function Work() {
  return (
    <>
          <section className="section work" aria-labelledby="work-label">
      <div className="container" id="PROJECTS">
        <p className="section-subtitle :light" id="work-label">Our Work</p>

        <h2 className="h2 section-title">
          Latest projects we have in our port
        </h2>

        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="work-card">
              <figure
                className="card-banner img-holder"
                style={{
                  '--width': '350px',
                  '--height': '406px',
                  width: 'var(--width)',
                  height: 'var(--height)',
                }}
              >
                <img
                  src={bike}
                  width="350"
                  height="406"
                  loading="lazy"
                  alt="Engine Repair"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Bike Repair</p>
                <h3 className="h3 card-title">Contact</h3>
                <a href="#" className="card-btn">
                <img src={arrow} alt="arrow" width="30px" />
                </a>
              </div>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="work-card">
              <figure
                className="card-banner img-holder"
                style={{
                  '--width': '350px',
                  '--height': '406px',
                  width: 'var(--width)',
                  height: 'var(--height)',
                }}
              >
                <img
                  src={car}
                  width="350"
                  height="406"
                  loading="lazy"
                  alt="Car Repair"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Bike Repair</p>
                <h3 className="h3 card-title">Contact</h3>
                <a href="#" className="card-btn">
                <img src={arrow} alt="arrow" width="30px" />
                </a>
              </div>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="work-card">
              <figure
                className="card-banner img-holder"
                style={{
                  '--width': '350px',
                  '--height': '406px',
                  width: 'var(--width)',
                  height: 'var(--height)',
                }}
              >
                <img
                  src={bus}
                  width="350"
                  height="406"
                  loading="lazy"
                  alt="Bus Repair"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Bike Repair</p>
                <h3 className="h3 card-title">Contact</h3>
                <a href="#" className="card-btn">
                <img src={arrow} alt="arrow" width="30px" />
                </a>
              </div>
            </div>
          </li>
          {/* Repeat the similar structure for other projects */}

        </ul>
      </div>
    </section>
    </>
  )
}

export default Work
