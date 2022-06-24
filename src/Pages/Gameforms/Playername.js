import React from 'react'
import './Playername.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Playername = ({handlePlayerState}) => {

    let navigate = useNavigate();

const [inputValue, setInputValue] = useState("")

const handleChange = (e) => {

    const name = e.target.name
    const value = e.target.value

    setInputValue(values => ({...values, [name]: value}))
  }

const handleSubmit = (e) => {
    e.preventDefault()
    
   fetch("http://localhost:9292/create_player", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputValue)

      })
      .then((res) => res.json())
      .then(data => {handlePlayerState(data)
        console.log(inputValue)
                            navigate("/game")})
    e.target.reset()
}

    return (
        <div>
      <form  align="center" autoComplete="off" onSubmit={handleSubmit} onChange={handleChange}>
      <label>  Enter Name  </label>
    <input type="text"  name="name" />
    <input type="submit" />
    </form>
        </div>
    )
}

export default Playername;
