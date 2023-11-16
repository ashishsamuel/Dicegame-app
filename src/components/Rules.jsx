import React from 'react'
import './Rules.css'

function Rules() {
  return (
    <>
        <div className='rule-box'>
          <h2 className='text-light'>How to play Dice Game</h2>
          <div className="text">
            <p className='text-light'>1. Select any number</p>
            <p className='text-light'>2. Click on dice image</p>
            <p className='text-light'>3. After you click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p className='text-light'>4. If you get wrong then 2 points will be deducted</p>
          </div>
        </div>
    </>
  )
}

export default Rules
