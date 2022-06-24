import React from 'react'
import Playername from './Gameforms/Playername'
import './Player.css'

const Player = ({handlePlayerState}) => {
    return (
        <div>
            <Playername handlePlayerState={handlePlayerState}/>
        </div>
    )
}

export default Player;