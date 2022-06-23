import React from 'react';
import bootstrap from 'bootstrap'
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Leaderboard from './Pages/Leaderboard';
import Header from './Components/Header'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/'element={<Leaderboard />}/>
      </Routes>
    </div>
  );
}