import React from 'react'

import { Container, Row, Col, Button, Card } from 'react-bootstrap'

import projects from '../../utils/projects'

import './styles.scss'

export default function ProjectFull() {
  return (
    <Container className="projects">
      <h1>Projetos</h1>

      <Row>
        {projects.map((item, index) => (
          <Col key={index} xs={12} sm={4} className="project">
            <Card>
              <div 
                className="image"
                style={{ backgroundImage: `url("${item.image}")` }} 
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <a href={item.link} target="_blank" rel="noreferrer noopener">
                    <Button variant="primary">Ver Mais</Button>
                  </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}