import React from 'react'
import comingSoon from '../img/coming-soon.jpg'
import './recentWork.scss'

const RecentWork = () => (
  <section className="section projects has-text-centered has-background-info">
    <div className="container">
      <h1 className="is-size-3-desktop is-size-4-mobile">My recent Projects</h1>
      <h2 className="subtitle is-size-5-desktop">
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
                  )[0].style.backgroundColor =
                    'red'
                }}
                onMouseLeave={() =>
                  (document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[0].style.opacity = 0)
                }
              >
                <h1 className="title is-size-5 is-size-4-widescreen">
                  some random sentence that just has to be pretty long so i know
                  its working how i want it to.
                </h1>
                <a
                  href=""
                  className="button is-primary is-outlined is-rounded"
                  target="_blank"
                >
                  <span>Visit Project</span>
                  <span className="icon" />
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
                  )[1].style.backgroundColor =
                    'red'
                }}
                onMouseLeave={() =>
                  (document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[1].style.opacity = 0)
                }
              >
                <h1 className="title is-size-5 is-size-4-widescreen">
                  some random sentence that just has to be pretty long so i know
                  its working how i want it to.
                </h1>
                <a
                  href=""
                  className="button is-primary is-outlined is-rounded"
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
                  )[2].style.backgroundColor =
                    'red'
                }}
                onMouseLeave={() =>
                  (document.querySelectorAll(
                    '.projects .project-grid figcaption'
                  )[2].style.opacity = 0)
                }
              >
                <h1 className="title is-size-5 is-size-4-widescreen">
                  some random sentence that just has to be pretty long so i know
                  its working how i want it to.
                </h1>
                <a
                  href=""
                  className="button is-primary is-outlined is-rounded"
                  target="_blank"
                >
                  <span>Visit Project</span>
                  <span className="icon" />
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
