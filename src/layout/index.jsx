import React from 'react'
import Menu from '../components/Menu'

export default function Layout({ children, menuColor }) {
  return (
    <div>
      <Menu menuColor={menuColor} />
      {children}
    </div> 
  )
}