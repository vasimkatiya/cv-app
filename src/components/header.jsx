import React from 'react'

const Header = ({name,date,email,phone,address}) => {
  return (
    <div className='header'>
        <h1>{name}</h1>
        <h4>{date}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{address}</h4>
    </div>
  )
}

export default Header;