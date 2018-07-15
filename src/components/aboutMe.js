import React from 'react'

import './aboutMe.scss'

const AboutMe = () => (
  <section
    className="section is-medium has-text-centered has-background-info"
    id="about"
  >
    <div className="container">
      <div className="columns centered">
        <div className="column is-three-fifths">
          <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-white">
            Hi, I'm Ely. Nice to mean you.
          </h1>
          <h2 className="subtitle is-size-5-desktop has-text-white has-text-justified">
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually improving my chops.
          </h2>
        </div>
      </div>
    </div>
  </section>
)

export default AboutMe
