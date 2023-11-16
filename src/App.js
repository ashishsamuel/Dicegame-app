import { useState } from 'react';
import './App.css';
import StartGame from './components/StartGame';
import Play from './components/Play';


function App() {
  const [isGameStarted,setIsGameStarted] = useState(false)

  const toggleGamePlay = ()=>{
    setIsGameStarted(true);
  }
  return (
    <>
      <div className="container back-image">
        {
          isGameStarted? <Play/>: <StartGame toggleGamePlay={toggleGamePlay}/>
        }

      </div>
    </>
  );
}

export default App;
