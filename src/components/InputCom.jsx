import React from "react";

const InputCom = ({ type, value, chnages,place,require,alt}) => {
  return <input type={type} placeholder={place} name={alt} required={require} onChange={chnages} value={value} />;
};

export default InputCom;
