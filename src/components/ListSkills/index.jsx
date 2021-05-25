import React from 'react'

import loadable from '@loadable/component'

import './styles.scss'

const SkillBar  = loadable(() => import ('react-skillbars'))

export default function ListSkills({ skills, colors }) {
  return (
    <div className="list-skills">
      <SkillBar 
        skills={skills} 
        colors={colors}
        animationDelay={0}
        animationDuration={1500}  
      />
    </div> 
  )
}