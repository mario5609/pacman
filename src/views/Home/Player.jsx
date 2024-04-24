import React, { useContext, useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import { Context } from '../../Context/Context'

export default function Player() {
    const{score, setScore, status, setStatus, time, setTime} = useContext(Context)


    useEffect(() => {
        if (status) {
          const timer = setTimeout(() => {
            (setTime(prev => prev + 1));
            console.log(timer);
          }, 1000);
          return () => clearTimeout(timer);
        }
      }, [time]);

    return (
        <div className='infoBar'>
            <div className='infoBarDetails'>
                <p><b>Player</b> &nbsp;</p>
                <Input className={"playerName"} placeholder={"Player 1"} />
            </div>
            <div className='infoBarDetails'>
                <p><b>Score</b> &nbsp;</p>
                <h4 className='detailValues'>{score}</h4>
            </div>
            <div className='infoBarDetails'>
                <p><b>Timer</b> &nbsp;</p>
                <h4 className='detailValues'>{time}</h4>
            </div>
        </div>
    )
}
