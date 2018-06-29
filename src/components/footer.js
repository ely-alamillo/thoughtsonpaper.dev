import React from 'react'
// import FontAwesome from 'react-fontawesome'
import './footer.scss'

const Footer = () => (
  <footer className="footer has-background-primary has-text-centered">
    <div className="container">
      <a href="#">
        <span className="icon fa-lg is-large">
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
          </span>
        </span>
      </a>
      <a href="#">
        <span className="icon fa-lg is-large">
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-github fa-stack-1x fa-inverse" />
          </span>
        </span>
      </a>
      <a href="#">
        <span className="icon fa-lg is-large">
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fas fa-envelope fa-stack-1x fa-inverse" />
          </span>
        </span>
      </a>
      <div>
        <p>{new Date().getFullYear()} Ely Alamillo</p>
      </div>
    </div>
  </footer>
)

export default Footer
