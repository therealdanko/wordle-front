import React from 'react'
import { useState } from 'react'
import './Gameform.css'


const Gameform = ({player}) => {

 const [guess, setGuess] = useState("")

const handleChange = (e) => {

    const guess = e.target.name
    const value = e.target.value

    setGuess(values => ({...values, [guess]: value}))
  }

  console.log(guess)

const handleSubmit = (e) => {
    e.preventDefault()  
    e.target.reset()
    debugger
}

    return (
        <div>
      <form  align="center" autoComplete="off" onSubmit={handleSubmit} onChange={handleChange}>
      <label>  Enter 5 Letter Word  </label>
    <input type="text"  name="name" maxLength={5}/>
    <input type="submit" />
    </form>
        </div>
    )
    }

export default Gameform;