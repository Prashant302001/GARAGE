import React from 'react'
import { cover } from '../images'
function About() {
  return (
    <>
         <section className="section about has-before" aria-labelledby="about-label" id="ABOUT">
          <div className="container">
            <figure className="about-banner">
              <img
                src={cover}
                width="700"
                height="540"
                loading="lazy"
                alt="vehicle repire equipments"
                className="w-100"
              />
            </figure>

            <div className="about-content">
              <p className="section-subtitle :dark">About Us</p>

              <h2 className="h2 section-title">
                We’re Commited to Meet the quality
              </h2>

              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                qui reprehenderit labore quo, ex necessitatibus. Nulla, vel
                iusto nesciunt, assumenda repellendus sequi obcaecati
                perferendis aperiam harum reiciendis distinctio, ad culpa?
              </p>

              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequatur!
              </p>

              <ul className="about-list">
                <li className="about-item">
                  <p>
                    <strong className="display-1 strong">8K+</strong> Happy Clients
                  </p>
                </li>

                <li className="about-item">
                  <p>
                    <strong className="display-1 strong">22+</strong> Instruments
                  </p>
                </li>

                <li className="about-item">
                  <p>
                    <strong className="display-1 strong">50+</strong> Years in
                    market
                  </p>
                </li>

                <li className="about-item">
                  <p>
                    <strong className="display-1 strong">30%</strong> Projects
                    completed
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default About
