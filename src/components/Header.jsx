import React from 'react'
import {profile,logo} from '../images'
function Header() {
  return (
    <>
        <header className="header">
      <div className="container" id="HOME">
        <a href="#" className="logo">
          <img
            src={logo}
            width="128"
            height="63"
            alt="autofix home"
          />
        </a>
        <h3 className="name">Garage Port</h3>
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#HOME" className="navbar-link">Home</a>
            </li>

            <li>
              <a href="#ABOUT" className="navbar-link">About</a>
            </li>

            <li>
              <a href="#SERVICES" className="navbar-link">Services</a>
            </li>

            <li>
              <a href="#PROJECTS" className="navbar-link">Projects</a>
            </li>

            <li>
              <a href="#CONTACT" className="navbar-link">Contact</a>
            </li>

            <li>
              <a href="sign.html" className="navbar-link"><img src={profile} width="23px"/></a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="toggle menu"
          data-nav-toggler
        >
          <span className="nav-toggle-icon icon-1"></span>
          <span className="nav-toggle-icon icon-2"></span>
          <span className="nav-toggle-icon icon-3"></span>
        </button>
      </div>
    </header>
    </>
  )
}

export default Header
