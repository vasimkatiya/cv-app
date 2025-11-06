import React from 'react'

const LabelCom = ({alt,text}) => {
  return (
        <label htmlFor={alt}>{text}</label>
)
}

export default LabelCom