import React from 'react'
import profile from '../img/profile.png'
import './hero.scss'

const Hero = () => (
  <section className="hero has-text-centered has-background-white">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
              Software Developer.
            </h1>
            <h2 className="subtitle is-size-4-desktop">
              I code beautiful sites and I love what I do.
            </h2>
            <img src={profile} alt="logo" width="150" />
          </div>
        </div>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container" />
    </div>
  </section>
)

export default Hero
