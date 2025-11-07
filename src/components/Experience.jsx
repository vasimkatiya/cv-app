import React from 'react'



const Experience = ({job,company,start,end,area}) => {
  return (
    <div className='experience'>
        <h2>{job}</h2>
        <h3>{company}</h3>
        <h4>{start}</h4>
        <h4>{end}</h4>
        <h4>{area}</h4>
    </div>
  )
}

export default Experience