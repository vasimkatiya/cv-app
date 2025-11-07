import React, { useState } from 'react'
import InputSet from './components/InputSet';
import TextAreaCom from './components/TextAreaCom';
import Header from './components/header';
import Education from './components/Education';
import Experience from './components/Experience';
import SkillArea from './components/skill';


const App = () => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("")
    const [DOB, setDOB] = useState("");
    const [address, setaddress] = useState("");
    const [Clg, setClg] = useState("");
    const [Degree, setDegree] = useState("");
    const [FDate, setFDate] = useState("");
    const [Job, setJob] = useState("");
    const [Company, setCompany] = useState("");
    const [Start, setStart] = useState("");
    const [End, setEnd] = useState("");
    const [area, setarea] = useState("");
    const [skills, setskills] = useState('');
    const [skills2, setskills2] = useState("");
    const [skills3, setskills3] = useState("");
  const Personal = [
    {
      text : "name",
      place:"name",
      type:"text",
      require:true,
      value:name,
      changes:(e)=> setName(e.target.value)
    },
    {
      text : "date of borth",
      place:"date of borth",
      type:"date",
      require:true,
      value:DOB,
      changes:(e)=> setDOB(e.target.value)
    },
    {
      text : "email",
      place:"example@gmail.com",
      type:"email",
      require:true,
      value:email,
      changes:(e)=> setemail(e.target.value)
    },
    {
      text : "phone",
      place:"+91 884XX XXXXX",
      type:"number",
      require:true,
      value:number,
      changes:(e)=> setnumber(e.target.value)
    },
    {
      text : "address",
      place:"address",
      type:"text",
      require:true,
      value:address,
      changes:(e)=> setaddress(e.target.value)
    }
  ];

  const Edu = [
    {
      text :"school/college",
      place :"school/college name",
      type:"text",
      require : true,
      value : Clg,
      changes : (e)=>{setClg(e.target.value)} 
    },
    {
       text :"degree",
      place :"degree",
      type:"text",
      require : true,
      value : Degree,
      changes : (e)=>{setDegree(e.target.value)} 
    },
    {
       text :"finish date",
      place :"finish date",
      type:"date",
      require : true,
      value : FDate,
      changes : (e)=>{setFDate(e.target.value)} 
    }
  ];

  const Exp = [
    {
      text :"job title",
      place :"job title",
      type:"text",
      require : false,
      value : Job,
      changes : (e)=>{setJob(e.target.value)} 
    },
     {
      text :"company name",
      place :"company name",
      type:"text",
      require : false,
      value : Company,
      changes : (e)=>{setCompany(e.target.value)} 
    },
     {
      text :"start date",
      place :"start date",
      type:"date",
      require : false,
      value : Start,
      changes : (e)=>{setStart(e.target.value)} 
    },
     {
      text :"end date",
      place :"end date",
      type:"date",
      require : false,
      value : End,
      changes : (e)=>{setEnd(e.target.value)} 
    }
  ];

  const Skills = [
     {
      text :"skill-1",
      place :"enter skill",
      type:"text",
      require : true,
      value : skills,
      changes : (e)=>{setskills(e.target.value)} 
    },
     {
      text :"skill-2",
      place :"enter skill",
      type:"text",
      require : true,
      value : skills2,
      changes : (e)=>{setskills2(e.target.value)} 
    },
     {
      text :"skill - 3",
      place :"enter skill",
      type:"text",
      require : true,
      value : skills3,
      changes : (e)=>{setskills3(e.target.value)} 
    }
  ]

  return (
    <div className='app'>
      <div className="form-container">
          <form onSubmit={(e)=>e.preventDefault()}>
            <h1>personal details</h1>
          {Personal.map((e,i)=>{
            return <InputSet key={i} text={e.text} type={e.type} value={e.value} changes={e.changes} place={e.place} require={e.require} />
          })}

          <h1>education</h1>
          {Edu.map((e,i)=>{
            return <InputSet key={i} text={e.text} type={e.type} place={e.place} require={e.require} value={e.value} changes={e.changes} />
          })}

          <h1>experience</h1>
          {Exp.map((e,i)=>{
            return <InputSet key={i} text={e.text} type={e.type} place={e.place} require={e.require} value={e.value} changes={e.changes} />
          })}
          <label>job description</label>
          <TextAreaCom key={101} change={(e)=>setarea(e.target.value)} value={area} place={"job description"} />
          <h1>skills</h1>
          <p>three skills are required.</p>
          {Skills.map((e,i)=>{
            return <InputSet key={i} text={e.text} type={e.type} place={e.place} require={e.require} value={e.value} changes={e.changes} />
          })}
          
          <button type="submit">Complete</button>
          </form>
      </div>
      <div className="cv-format">
        <Header name={name} date={DOB} email={email} phone={number} address={address} />
        <Education college={Clg} company={Degree} finish={FDate} />
        <Experience job={Job} company={Company} start={Start} end={End} area={area} />
        <SkillArea skill={skills} />
        <SkillArea skill={skills2} />
        <SkillArea skill={skills3} />
      </div>
    </div>
  )
}

export default App