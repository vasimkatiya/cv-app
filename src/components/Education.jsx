import React from 'react'

const Education = ({college,company,finish}) => {
  return (
    <div className='education'>
        <h2>{college}</h2>
        <h3>{company}</h3>
        <h2>{finish}</h2>
    </div>
  )
}

export default Education;