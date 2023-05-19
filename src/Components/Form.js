import React, { useState } from 'react'
import RealData from './RealData';

export default function Form ({func}) {
    const [str, setStr]= useState("Input value displays here.")
    

    const handleChange = (e) =>{
          const{value} = e.target
          setStr(value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
         func(str)

    }

  return (
    <div>
        <RealData str={str}/>
        <form action="" onSubmit={handleSubmit}>
            <p><input type="text" onChange={handleChange} /></p>
            <p><button>Submit</button></p>
        </form>
    </div>
  )
}
