import React, { createContext, useState } from 'react'

export const Context = createContext();

export default function ContextProvider({children}) {
    let lvl1 = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 4, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1],
        [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1],
        [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1],
        [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
        [1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 1, 1],
        [1, 4, 3, 3, 3, 3, 3, 2, 1, 6, 2, 8, 1, 2, 3, 3, 3, 3, 3, 4, 1],
        [1, 1, 1, 1, 1, 3, 1, 2, 1, 7, 2, 9, 1, 2, 1, 3, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 1, 3, 1, 2, 1, 1, 1, 1, 1, 2, 1, 3, 1, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 3, 1, 2, 2, 2, 5, 2, 2, 2, 1, 3, 1, 1, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 3, 1],
        [1, 3, 1, 1, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 1],
        [1, 3, 3, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 3, 3, 1],
        [1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1],
        [1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1],
        [1, 3, 1, 3, 3, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 1, 3, 1],
        [1, 3, 1, 3, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 3, 1, 3, 1],
        [1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1],
        [1, 4, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 4, 1],
        [1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1],
        [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1],
        [1, 3, 3, 3, 3, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 3, 3, 3, 3, 1],
        [1, 3, 1, 1, 3, 1, 1, 3, 3, 3, 1, 3, 3, 3, 1, 1, 3, 1, 1, 3, 1],
        [1, 3, 1, 1, 3, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 3, 1, 1, 3, 1],
        [1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 1, 3, 1],
        [1, 3, 1, 1, 3, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1],
        [1, 4, 3, 3, 3, 1, 2, 2, 1, 3, 3, 3, 1, 2, 2, 1, 3, 3, 3, 4, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
    ]
    const [level, setlevel] = useState(lvl1)
    const [level1, setLevel1] = useState(level)
    const [face, setFace] = useState("PacMan")
    const [score, setScore] = useState(0)
    const [lost, setLost] = useState(false)
    const [win, setWin] = useState(false)
    const [blinky, setBlinky] = useState({ x: 9, y: 10 })
    const [inky, setInky] = useState({ x: 11, y: 10 })
    const [clyde, setClyde] = useState({ x: 9, y: 11 })
    const [pinky, setPinky] = useState({ x: 11, y: 11 })
    const [fake, setFake] = useState()
    const [status, setStatus] = useState(false)
    const [time, setTime] = useState(0)

    return (
        <Context.Provider value={{fake, setFake, level1, setLevel1, level, setlevel, face, setFace, score, setScore, blinky, setBlinky, inky, setInky, clyde, setClyde, pinky, setPinky, lost, setLost, win, setWin, status, setStatus, time, setTime }}>{children}</Context.Provider>
    )
}
