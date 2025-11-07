import React from 'react'

const Education = ({college,degree,finish}) => {
  return (
    <div className='education'>
        <h2>{college}</h2>
        <h3>{degree}</h3>
        <h4>{finish}</h4>
    </div>
  )
}

export default Education;