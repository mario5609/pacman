import React, { useContext, useState } from 'react'
import "./Lost.css"
import ghostgif from "../../assets/animation/ghost.gif"
import Button from '../Button/Button'
import { Context } from '../../Context/Context'

export default function Lost() {

    const{lost, setLost} = useContext(Context)

    if (lost) {
        document.body.classList.add('activeLost')
    } else {
        document.body.classList.remove('activeLost')
    }

    function handleOnClick() {
        setLost(!lost);
        window.location.reload();
    }



    return (
        <>
            {lost && (
                <div className='lost'>
                    <div className='overlay'>
                        <div className='lostContent'>
                            <h1>YOU <br /> LOST</h1>
                            <img src={ghostgif} height="120px" width="180px" />
                            <Button label={"TRY AGAIN"} className={"lostButton"} onClick={handleOnClick} />
                        </div>
                    </div>
                </div>)}
        </>
    )
}
