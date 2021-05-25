import React from 'react'
import About from '../components/About'
import Profile from '../components/Profile'
import Layout from '../layout'

export default function Index() {
  return (
    <Layout>
      <Profile />
      <About />
    </Layout>
  )
}