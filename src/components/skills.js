import React from 'react'
import './skills.scss'
import Card from './card';

const Skills1 = () => (
  <section
    className="section has-text-centered has-background-success is-medium"
    id="skills"
  >
    <h1 className="title is-size-1-desktop is-size-2-tablet is-size-3-mobile">
      Skills.
    </h1>
    <div className="container">
      <div className="columns">
        {
          [{ title: 'Frontend' }, { title: 'Backend' }, { title: "Mentor" }].map((card) => {
            return (
              <div className=" column is-one-third">
                <Card {...card} />
              </div>

            )
          })
        }
      </div>

    </div>
  </section>
)

export default Skills1
