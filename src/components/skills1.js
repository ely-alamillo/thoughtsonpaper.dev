import React from 'react'
import './skills.scss'

const Skills1 = () => (
  <section
    className="section has-text-centered has-background-success is-medium"
    id="skills"
  >
    <h1 className="title is-size-1-desktop is-size-2-tablet is-size-3-mobile">
      Skills.
    </h1>
    <div className="container">
      <div className="box is-paddingless">
        <div className="content">
          <div className="columns has-text-center">
            <div className="column skills-section">
              <h1>Backend</h1>
              <p>
                I enjoy crafting business solutions that are only a request
                away.
              </p>
              <p className="has-text-weight-semibold has-text-link">
                Backend tech I use:
              </p>
              <ul className="list has-text-centered">
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
              {/* <p className="has-text-weight-semibold has-text-link">
                Backend Tools:
              </p>
              <p>Mongoose, Digital Ocean, Mlab.</p> */}
            </div>
            <div className="column skills-section">
              <h1>Frontend</h1>
              <p>
                I focus on creating simple and intuitive interfaces to give the
                user a seamless experience.
              </p>
              <p className="has-text-weight-semibold has-text-link">
                Frontend tech I use:
              </p>
              <ul className="list has-text-centered">
                <li>React</li>
                <li>Angular</li>
                <li>Redux</li>
                <li>Bulma</li>
                <li>Bootsrap</li>
              </ul>
              {/* <p className="has-text-weight-semibold has-text-link">
                Frontend Tools:
              </p>
              <p>VS Code,</p> */}
            </div>
            <div className="column skills-section last">
              <h1>Mentor</h1>
              <p>
                I'm a big fan of giving back to the community and mentor those
                who seek more.
              </p>
              <p className="has-text-weight-semibold has-text-link">
                Where I've mentored:
              </p>
              <ul className="list has-text-centered">
                <li>Lambda School</li>
                <li>Javascript Developers</li>
              </ul>
              {/* <p className="has-text-weight-semibold has-text-link">
                Mentor stats:
              </p>
              <p>Vscode, Mlab, JS Debugger</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Skills1
