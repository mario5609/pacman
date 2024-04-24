import React, { useContext, useState } from 'react'
import Button from "../../components/Button/Button"
import { Context } from '../../Context/Context';

export default function Settings() {
  const {lost, setLost, status, setStatus, time, setTime} = useContext(Context)
  const [pause, setPause] = useState("PAUSE")

  function handleOnClick() {
    setTime(prev => prev + 1)
    setStatus(true)
    document.getElementById("walls").focus(); 
  }

  function handlePause(){
    setStatus(!status)

    if(pause == "PAUSE"){
      setPause("RESUME")
    }else{
      setTime(prev => prev + 1)
      setPause("PAUSE")
    }

    document.getElementById("walls").focus(); 
  }

  function handleLost() {
    document.getElementById("walls").focus(); 
    setLost(!lost)
  }

  return (
    <div className='settings'>
      <Button className={"settingsButton"} label={"START"} onClick={handleOnClick} />
      <Button className={"settingsButton"} label={pause} onClick={handlePause}/>
      <Button className={"settingsButton"} label={"QUIT"} onClick={handleLost} />
    </div>
  )
}


/*
    let score = 0
    level.forEach(element => {
      element.forEach(item => {
        if (item === 6) {
          score = score + 1;
        }
      });
    });
    console.log(score);
*/