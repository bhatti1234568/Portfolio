import React from 'react'
const Skills = ({img,title,level}) => {
  return (
    <div className="skills-data">
      <div className="skills-blob">
        <img src={img} alt="" className="skills-img" />
      </div>
      <h3 className="skill-name">{title}</h3>
        <span className="skill-level">{level}</span>
    </div>
  )
}

export default Skills