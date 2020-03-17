import React from 'react'
// import FontAwesome from 'react-fontawesome'
import './footer.scss'

const Footer = () => (
  <footer className="footer has-background-white-ter">
    <div className="container">
      <div className="has-text-centered">
        <div className="nav-center">
          <a
            className="nav-item has-text-link"
            href="https://github.com/ely-alamillo"
          >
            <span className="icon is-large">
              <i className="fab fa-github fa-2x" />
            </span>
          </a>
          <a
            className="nav-item has-text-link"
            href="https://www.linkedin.com/in/elyalamillo/"
          >
            <span className="icon is-large">
              <i className="fab fa-linkedin fa-2x" />
            </span>
          </a>
          <a
            className="nav-item has-text-link"
            href="mailto:ely0013@gmail.com?Subject=Hello%20Ely"
          >
            <span className="icon is-large">
              <i className="fas fa-envelope fa-2x" />
            </span>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Ely Alamillo | All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
