import React from 'react'
import comingSoon from '../img/coming-soon.jpg'
import './recentWork.scss'

const RecentWork = () => (
  <section
    className="section projects has-text-centered has-background-info is-medium"
    id="recentWork"
  >
    <div className="container">
      <h1 className="is-size-1-desktop is-size-2-tablet is-size-3-mobile title has-text-white">
        Recent Projects.
      </h1>
      <h2 className="subtitle is-size-5-desktop has-text-white">
        Here are some of my most recent projects.
      </h2>
      <div className="project-grid">
        <div className="columns is-multiline is-mobile">
          <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure className="image is-3by2">
              <img src={comingSoon} alt="project" />
              <figcaption
                onMouseEnter={() => {
                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[0].style.opacity = 1

                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[0].style.backgroundColor = 'rgba(56, 60, 62, 0.9)'
                }}
                onMouseLeave={() => {
                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[0].style.opacity = 0
                }}
              >
                <h1 className="title is-size-5 is-size-4-widescreen has-text-white">
                  Bitsy
                </h1>
                <p className="subtitle has-text-white">
                  Use Bitsy for all your URL shortening needs.
                </p>
                <a
                  href=""
                  className="button is-info is-rounded"
                  target="_blank"
                >
                  <span>Visit Project</span>
                  {/* <span className="icon" /> */}
                </a>
              </figcaption>
              <div className="overlay" />
            </figure>
          </div>

          <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure className="image is-3by2">
              <img src={comingSoon} alt="project" />
              <figcaption
                onMouseEnter={() => {
                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[1].style.opacity = 1

                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[1].style.backgroundColor = 'rgba(56, 60, 62, 0.9)'
                }}
                onMouseLeave={() =>
                  (document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[1].style.opacity = 0)
                }
              >
                <h1 className="title is-size-5 is-size-4-widescreen has-text-white">
                  Speech Trainer
                </h1>
                <p className="subtitle has-text-white">
                  Speech Trainer was built to help you speak better english.
                </p>
                <a
                  href=""
                  className="button is-info is-rounded"
                  target="_blank"
                >
                  <span>Visit Project</span>
                </a>
              </figcaption>
              <div className="overlay" />
            </figure>
          </div>

          <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure className="image is-3by2">
              <img src={comingSoon} alt="project" />
              <figcaption
                onMouseEnter={() => {
                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[2].style.opacity = 1

                  document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[2].style.backgroundColor = 'rgba(56, 60, 62, 0.9)'
                }}
                onMouseLeave={() =>
                  (document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[2].style.opacity = 0)
                }
              >
                <h1 className="title is-size-5 is-size-4-widescreen has-text-white">
                  Jobbie
                </h1>
                <p className="subtitle has-text-white">
                  Jobbie will help you land the perfect
                </p>
                <a
                  href=""
                  className="button is-info is-rounded"
                  target="_blank"
                >
                  <span className="has-text-info">Visit Project</span>
                </a>
              </figcaption>
              <div className="overlay" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default RecentWork
