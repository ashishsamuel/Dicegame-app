import './RollDice.css'

function RollDice({currentDice,rollDice}) {
    
    // console.log(currentDice);
  return (
    <>
        <div className='dice-style'> 
          <img className='dicenumber-img' src={`/images/dice/dice${currentDice}.png`} alt="dice 1" onClick={()=>rollDice(1,7)}/>
          <p className='fs-4 fw-bold'>Click on Dice to Roll</p>
        </div>
    </>
  )
}

export default RollDice
