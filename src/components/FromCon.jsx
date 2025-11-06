import React, { useState } from 'react'
import LabelCom from './LabelCom'
import InputCom from './InputCom'
import TextAreaCom from './TextAreaCom'

const FromCon = (props) => {
    const [text, setText] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("")
    const [DOB, setDOB] = useState("");
    const [address, setaddress] = useState("");
    const [area, setarea] = useState("");
  return (
    <div className='form-container'>
        <form>
            <div className="name">
                <LabelCom alt={props.name} text={"full name :"} />
            <InputCom alt={"fname"} type={"text"} place={"enter name"} require={true} value={text} chnages={(e)=>{
                setText(e.target.value);
            }}/>
            </div>

            
            <div className="date-of-borth">
                <LabelCom alt={"date of borth"} text={"date of borth"} />
            <InputCom alt={"date of borth"} place={"date of birth"} type={"date"} require={true} value={DOB} chnages={(e)=>{
                setDOB(e.target.value);
            }}/>
            </div>


            <div className="email">
                <LabelCom alt={"email"} text={"email :"} />
            <InputCom alt={"email"} place={"example@gmail.com"} type={"email"} require={true} value={email} chnages={(e)=>{
                setemail(e.target.value);
            }}/>
            </div>
            
            
            <div className="phone">
                <LabelCom alt={"mobile"} text={"phone :"} />
            <InputCom alt={"mobile"} place={"+91 884XX XXXXX"} type={"number"} require={true} value={number} chnages={(e)=>{
                setnumber(e.target.value);
            }}/>
            </div>


            <div className="address">
                <LabelCom alt={"address"} text={"address : "} />
            <InputCom alt={"address"} place={"address"} type={"text"} require={true} value={address} chnages={(e)=>{
                setaddress(e.target.value);
            }}/>
            </div>
            
            <div className="textarea">
                <LabelCom alt={"text-area"} text={"about you :"} />
                <TextAreaCom place={"tall us something about yourself !"} value={area} change={(e)=>{
                    setarea(e.target.value);
                }} />
            </div>
            


        </form>
    </div>
  )
}

export default FromCon