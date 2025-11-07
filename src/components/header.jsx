import React from 'react'

const Header = ({name,date,email,phone,address}) => {
  return (
    <div className='header'>
        <span>
        <h1>{name}</h1>
        <h4>{email}</h4>
        </span>
        <span className="sec">

        <h4>{date}</h4>
        <h4>{phone}</h4>
        <h4>{address}</h4>
        </span>
    </div>
  )
}

export default Header;