import React from 'react'
import './StartGame.css'

function StartGame({toggleGamePlay}) {
  return (
    <div className='container mt-5'>
      <div className='homepage-style'>
        <img src="/images/dice1.png" alt="image of dice" className='dice-img'/>
        <div className='mx-5 d-flex flex-column justify-content-center'>
            <h1 className='fw-bold text-dark'>Dice Game</h1>
            <button className='btn btn-dark text-light' onClick={toggleGamePlay}>Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default StartGame
