import React from 'react'
import './TotalScore.css'

function TotalScore({score}) {
  return (
    <div className='score-section'>
      <h1 className='score-value text-dark'>{score}</h1>
      <p className='fw-bold fs-4'>Total Score</p>
    </div>
  )
}

export default TotalScore
