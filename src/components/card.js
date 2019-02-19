import React from 'react'

import './card.scss'

const Card = ({ title }) => (
  <div className="box">
    <header >
      <p className="title">
        {title}
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
)

export default Card
