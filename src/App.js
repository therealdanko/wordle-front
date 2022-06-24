import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Gameform from './Pages/Gameforms/Gameform'
import Player from './Pages/Player'
import Leaderboard from './Pages/Leaderboard';
import Header from './Components/Header'
import {useState, useEffect} from 'react'
import './App.css'

export default function App() {

  const [player, setPlayer] = useState("")

  const handlePlayerState = (playerObj) => {
    setPlayer(playerObj)
    console.log(playerObj)
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/'element={<Player handlePlayerState={handlePlayerState}/>}/>
        {/* <Route path='/new-player' element={<Leaderboard />}/> */}
        <Route path='/game' element={<Gameform player={player}/>}/>
        <Route path='/leaderboard' element={<Leaderboard />}/>
      </Routes>
    </div>
  );
}