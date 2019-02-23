import React from 'react'

import './card.scss'

const Card = ({ title, subHeader, techHeader, stack, toolsHeader, tools }) => (
  <div className="box">
    <header>
      <h1 className="title">{title}</h1>
      <p>{subHeader}</p>
    </header>
    <div className="card-content">
      <div className="content">
        <p className="has-text-weight-semibold has-text-info">{techHeader}:</p>
        <ul className="card-list has-text-centered">
          {stack.map(name => (
            <li>{name}</li>
          ))}
        </ul>
        {toolsHeader && (
          <div>
            <p className="has-text-weight-semibold has-text-info">
              {toolsHeader}:
            </p>
            <p>{tools}</p>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
