import React, { useContext } from 'react'
import "./PacMan.css"
import { useState } from 'react'
import { Context } from '../../Context/Context'

export default function PacMan() {

    const {face, setFace} = useContext(Context);

    return (
        <div className={face}>
            <div className='token'>
                <div className='eyes'></div>
            </div>
        </div>
    )
}
