import React, { useContext } from 'react'
import "./Winner.css"
import Button from '../Button/Button'
import winner from "../../assets/animation/win.gif"
import { Context } from '../../Context/Context'

export default function Winner() {

    const { win, setWin, level, score, setScore } = useContext(Context)

if(score == 532){
    setWin(true);
    window.location.reload();

}

    if (win) {
        document.body.classList.add('activeWin')
    } else {
        document.body.classList.remove('activeWin')
    }

    function handleonClick() {
        setWin(!win);
        window.location.reload();
    }

    return (
        <>
            {win &&
                <div className='win'>
                    <div className='overlay'>
                        <div className='winContent'>
                            <h1>WINNER</h1>
                            <img src={winner} height="200px" width="240px" />
                            <Button label={"PLAY AGAIN"} className={"WinButton"} onClick={handleonClick} />
                        </div>
                    </div>
                </div>}
        </>
    )
}
