import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import avatar  from '../../images/avatar.jpg'
import Social from './Social'

import './styles.scss'

const data = [
  {
    title: 'John Doe',
    description: 'Idade: 1800'
  },
  {
    title: 'E-mail',
    description: 'email@email.com'
  },
  {
    title: 'Frontend',
    description: 'Reactjs, Gatsbyjs, Nextjs'
  },
  {
    title: 'Backend',
    description: 'Nodejs, GraphQL, Nest'
  }
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={avatar} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>Hello :)</span>
            <p>John Doe</p>
            <p>Unknown</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div className="item" key={index}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}