import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import './Play.css'
import Rules from './Rules'

function Play() {
  const [score,setScore] = useState(0);
    const [currentDice,setCurrentDice] = useState(1);
    const [selectedNumber,setSelectedNumber] = useState(0);
    const[error,setError] = useState("");
    const [showRules,setShowRules] = useState(false)
    const generateRandomNumber = ((min,max)=>{
      // console.log(Math.floor(Math.random() * (max - min) + min));
      return Math.floor(Math.random() * (max - min) + min);
  })

  const rollDice = ()=>{
      if(!selectedNumber) {
      setError("You have not selected any number")
        return;
      }
      
      const randomNumber = generateRandomNumber(1,7);
      setCurrentDice(randomNumber)

      if(selectedNumber === randomNumber){
        setScore((prev)=> prev + randomNumber)
      }else{
        setScore((prev)=>prev-2)
      }
      setSelectedNumber(undefined)
  }

  const resetScore=()=>{
    setScore(0)
  }

  return (
    <>
        <div className='game-section'>
          <TotalScore score={score}/>
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className="buttons mt-4">
          <button className='btn btn-light text-dark mx-4 button-style fw-bold' onClick={resetScore}>Reset</button>
          <button className='btn btn-dark text-light button-style fw-bold' onClick={()=>setShowRules((prev)=>!prev)}>Show Rules</button>
        </div>
        {showRules &&
          <Rules/>
        } 
    </>
  )
}

export default Play
