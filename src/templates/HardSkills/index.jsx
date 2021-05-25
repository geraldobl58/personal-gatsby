import React from 'react'

import { Container } from 'react-bootstrap'

import ListSkills from '../../components/ListSkills'

import { skillsfrontend, skillsfrontendcolors } from '../../utils/skills'

import './styles.scss'

export default function HardSkills() {
  return (
    <Container className="skills">
      <div className="skills__block">
        <h2>Frontend</h2>
        <ListSkills 
          skills={skillsfrontend} 
          colors={skillsfrontendcolors} 
        />
      </div>
    </Container>
  )
}