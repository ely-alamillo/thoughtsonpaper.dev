import React, { useState } from 'react'
import Link from 'gatsby-link'
import logo from '../img/ely-box.svg'
import altLogo from '../img/logo-hotpink.svg'

import './header.scss'

class Header extends React.Component {
  state = {
    isHover: false,
  }

  setIsHover(status) {
    this.setState({ isHover: status })
  }

  closeNav() {
    const size = window.innerWidth

    if (size < 1024) {
      document.querySelector('.navbar-menu').classList.toggle('is-active')
    }
  }

  render() {
    const { isHover } = this.state
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a
              className="navbar-item navbar-item-no-hover"
              onMouseEnter={() => this.setIsHover(true)}
              onMouseLeave={() => this.setIsHover(false)}
            >
              <img
                src={isHover ? altLogo : logo}
                alt="Ely Alamillo"
                width="52"
                height="52"
                style={{ width: '52px', height: '52px' }}
              />
            </a>

            {/* <h2>{siteTitle}</h2> */}
            <a
              role="button"
              className="navbar-burger navbar-item-no-hover"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={() => closeNav()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end has-text-weight-bold">
              <div className="navbar-item" onClick={() => closeNav()}>
                <Link to="/#about">About</Link>
              </div>
              <div className="navbar-item" onClick={() => closeNav()}>
                <Link to="/#skills">Skills</Link>
              </div>
              <div className="navbar-item" onClick={() => closeNav()}>
                <Link to="/#recentWork">Recent Work</Link>
              </div>
              <div className="navbar-item" onClick={() => closeNav()}>
                <Link to="/#contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
