import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <h2>{siteTitle}</h2>
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
            <Link to="#">About</Link>
          </div>
          <div className="navbar-item">
            <Link to="#">Projects</Link>
          </div>
          <div className="navbar-item">
            <Link to="#">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header

{
  /* < nav
className = "navbar is-primary"
role = "navigation"
aria - label="main navigation"    
  >
  <div className="container">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        {siteTitle}
      </Link>
    </div>
  </div>
  </nav >  */
}
