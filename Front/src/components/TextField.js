import React from 'react'
import {useField} from "formik";

const TextField = (props) => {
    const [field,meta]= useField(props.name);


  return (
    <div>
        <input {...field} {...props} style={{width:"11rem", height:"1.7rem",borderRadius:"0.5rem",paddingLeft:"1.2rem"}} />
        <br/>
        <span style={{color:"burlywood"}}>{meta.error}</span>
        <br/>
    </div>
  )
}

export default TextField;