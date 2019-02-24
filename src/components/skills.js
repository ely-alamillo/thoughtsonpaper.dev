import React from 'react'
import './skills.scss'
import Card from './card'

const Skills1 = () => {
  const skillsData = [
    {
      title: 'Backend',
      subHeader:
        'I enjoy crafting business solutions that are simple and scalable powered by the latest tools.',
      techHeader: 'Backend Tech',
      stack: ['Node', 'Express', 'Flask', 'Postgres', 'GraphQL'],
      toolsHeader: 'Backend Tools',
      tools: 'Heroku, Postman, Insomnia',
    },
    {
      title: 'Frontend',
      subHeader:
        'I focus on creating simple and intuitive interfaces that drive a seamless experience.',
      techHeader: 'Frontend Tech',
      stack: ['React', 'Redux', 'Typescript', 'GraphQL', 'Sass'],
      toolsHeader: 'Frontend Tools',
      tools: 'VS Code, Netlify, Heroku',
    },
    {
      title: 'Mentor',
      subHeader:
        " I'm a big fan of giving back to the community and mentor those who seek more.",
      techHeader: "Where I've mentored",
      stack: ['Lambda School', 'Lambda HTX Meetup'],
    },
  ]
  return (
    <section
      className="section has-text-centered has-background-white is-medium"
      id="skills"
    >
      <h1 className="title is-size-1-desktop is-size-2-tablet is-size-3-mobile">
        Skills.
      </h1>
      <div className="container">
        <div className="columns">
          {skillsData.map((card, idx) => {
            return (
              <div className="column is-flex-custom is-one-third" key={idx}>
                <Card {...card} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills1
