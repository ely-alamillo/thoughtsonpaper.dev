import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'
import AboutMe from '../components/aboutMe'
import Skills from '../components/skills'
import RecentWork from '../components/recentWork'
import Contact from '../components/contact'

const IndexPage = () => (
  <div>
    <Hero />
    <AboutMe />
    <Skills />
    <RecentWork />
    <Contact />
  </div>
)

export default IndexPage
