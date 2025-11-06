import React from 'react'

const TextAreaCom = ({place,change}) => {
  return (
        <textarea placeholder={place} onChange={change} maxLength={120}></textarea>
  )
}

export default TextAreaCom;