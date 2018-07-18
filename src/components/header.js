import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'

import './header.scss'

const closeNav = () => {
  document.querySelector('.navbar-menu').classList.toggle('is-active')
}
const Header = ({ siteTitle }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item">
          <a>
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </div>
        {/* <h2>{siteTitle}</h2> */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          onClick={() =>
            document.querySelector('.navbar-menu').classList.toggle('is-active')
          }
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/#about">About</Link>
          </div>
          <div className="navbar-item">
            <Link to="/#skills">Skills</Link>
          </div>
          <div className="navbar-item">
            <Link to="/#recentWork">Recent Work</Link>
          </div>
          <div className="navbar-item">
            <Link to="/#contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
