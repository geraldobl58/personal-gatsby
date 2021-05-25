import React from 'react'

import { Link } from 'gatsby'

import { Container } from 'react-bootstrap'

import './styles.scss'

export default function Menu({ menuColor }) {
  return (
    <div className="menu" style={{ backgroundColor: menuColor || 'transparent' }}>
      <Container>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
        </ul>
      </Container>
    </div>
  )
}