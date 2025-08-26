import { useState,useEffect } from 'react';
import ControlButtons from './components/ControlButtons';
import TimerDisplay from './components/TimerDisplay';
import TimeSetter from './components/TimeSetter';
import './App.css'

function App() {
  const [minutes,setMinutes]=useState(5);
  const [seconds,setSeconds]=useState(0);
  const [isActive,setIsActive]=useState(false);
  const [totalSeconds,setTotalSeconds]=useState(300);
  const [timeLeft,setTimeLeft]=useState(300);

  const startTimer=()=>{
    setTotalSeconds(minutes*60+seconds);
    setTimeLeft(minutes*60+seconds);
    setIsActive(true);

  }

  const stopTimer=()=>{
    setIsActive(false);
  }
  const resetTimer=()=>{
    setTimeLeft(totalSeconds);
    setIsActive(false);
  }


  useEffect(()=>{
      let interval=null;
      if(isActive && timeLeft>0){
        interval=setInterval(()=>{
          setTimeLeft(timeLeft => timeLeft-1);
        },1000)
      }else if(timeLeft===0){
        setIsActive(false);
        alert("Time is Up!")
      }
      return () => clearInterval(interval);
  },[isActive,timeLeft]);

  return(
    <div className='app'>
      <h2>Countdown Timer</h2>
      <TimeSetter
      minutes={minutes}
      seconds={seconds}
      setMinutes={setMinutes}
      setSeconds={setSeconds}
      disabled={isActive}
      />
      <TimerDisplay
      timeLeft={timeLeft}
      />
      <ControlButtons
      isActive={isActive}
      startTimer={startTimer}
      stopTimer={stopTimer}
      resetTimer={resetTimer}/>
    
    </div>
  )

}
export default App;
