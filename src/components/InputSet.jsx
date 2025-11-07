import React from "react";
// import InputCom from "./InputCom";

const InputSet = (props) => {
  return (
    <div className="input-set">
      <label>{props.text}</label>
      <input type={props.type} placeholder={props.place} name={props.alt} required={props.require} onChange={props.changes} value={props.value} />
    </div>
  )
}

export default InputSet;
