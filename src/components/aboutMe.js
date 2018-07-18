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
          <h1 className="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-white">
            Hi, I'm Ely. Nice to meet you.
          </h1>
          <h2 className="subtitle is-size-5-desktop has-text-white has-text-justified">
            I've been programming for three years, one year professionally. I
            have worked in both small and large teams. My primary toolset
            revolves around Javascript/Typescript and I enjoy using modern
            frameworks such as React and Angular.
            <br />
            <br />
            I love building things. On my spare time I tend to work on side
            projects, or catch a good book. If you'd like to pick my brain about
            anything feel free to contact me!
          </h2>
        </div>
      </div>
    </div>
  </section>
)

export default AboutMe
