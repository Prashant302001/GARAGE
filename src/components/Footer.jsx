import React from 'react'
import { github, linkdin, twitter,strip,foot,logo,call,mail,address} from '../images'

function Footer() {
  return (
    <>
        <footer className="footer">
      <div className="footer-top section">
        <div className="container" id="CONTACT">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} width="128" height="63" alt="autofix home" />
            </a>

            <p className="footer-text">
              Deal with the best hospitality and services with Garage Port.<br />
              Garage Port : Where exceptional service meets unbeatable value
            </p>

            <ul className="social-list">
              <li>
                <a
                  href="www.linkedin.com/in/prashant-kumar-prajapati"
                  className="social-link"
                >
                  <img src={linkdin} alt="Linkedin" width="50px" />
                </a>
              </li>

              <li>
                <a href="https://github.com/Prashant302001" className="social-link">
                  <img src={github} alt="instagram" width="50px" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <img src={twitter} alt="twitter" width="50px" />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="h3">Opening Hours</p>
            </li>

            <li>
              <p className="p">Monday – Saturday</p>

              <span className="span">12.00 – 14.45</span>
            </li>

            <li>
              <p className="p">Sunday – Thursday</p>

              <span className="span">17.30 – 00.00</span>
            </li>

            <li>
              <p className="p">Friday – Saturday</p>

              <span className="span">12.00 – 14.45</span>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="h3">Contact Info</p>
            </li>

            <li>
              <a href="tel:+01234567890" className="footer-link">

              <img src={call} alt="call" width="20px" />+91 9336858465
              </a>
            </li>

            <li>
              <a href="mailto:prashant.2125csit1@kiet.edu" className="footer-link">
              <img src={mail} alt="mail" width="20px" />prashant.2125csit1@kiet.edu
              </a>
            </li>

            <li>
              <address className="footer-link address">
              <img src={address} alt="address" width="20px" />Muradnagar, Ghaziabad-201206
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2023, Prashant,Yasir,Rahul,Niraj All Rights Reserved.
          </p>
          <img
            src={strip}
            width="805"
            height="652"
            loading="lazy"
            alt="Red Car"
            className="shape shape-1 move-anim"
          />
          <img
            src={foot}
            width="778"
            height="335"
            loading="lazy"
            alt="Shape"
            className="shape shape-2"
          />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
