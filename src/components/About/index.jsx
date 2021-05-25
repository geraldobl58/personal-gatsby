import React from 'react'

import { Container, Button } from 'react-bootstrap'

import Cv from '../../images/cv.pdf'

import './styles.scss'

export default function About() {
  return (
    <Container className="about">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis commodi distinctio delectus alias praesentium, sit animi eius nesciunt voluptatibus excepturi iste doloribus illo laborum ducimus esse libero asperiores totam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis commodi distinctio delectus alias praesentium, sit animi eius nesciunt voluptatibus excepturi iste doloribus illo laborum ducimus esse libero asperiores totam?
      </p>

      <Button 
        href={Cv} 
        target="_blank" 
        primary="true"
        >
          Downalod Cv
      </Button>
    </Container>
  )
}