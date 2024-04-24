import React, { useContext } from 'react'
import Block from '../../components/Block/Block'
import Path from '../../components/Path/Path';
import PacMan from '../../components/PacMan/PacMan';
import Coin from '../../components/Coin/Coin';
import Pill from '../../components/Pill/Pill';
import { useState, useEffect } from 'react';
import { Context } from '../../Context/Context';
import Blinky from '../../components/Ghosts/Blinky';
import Pinky from '../../components/Ghosts/Pinky';
import Clyde from '../../components/Ghosts/Clyde';
import Inky from '../../components/Ghosts/Inky';

export default function Level() {

    const { level, setlevel, fake, setFake } = useContext(Context)
    const [pacman, setPacman] = useState({ x: 10, y: 13 })
    const { blinky, setBlinky, inky, setInky, clyde, setClyde, pinky, setPinky } = useContext(Context)
    const { face, setFace, score, setScore, lost, setLost, status, setStatus } = useContext(Context);
    const [direction, setDirection] = useState()

    // key={`${row}-${col}`}

    function walls() {

        const unit = [];
        for (let row = 0; row < level.length; row++) {
            for (let col = 0; col < level[row].length; col++) {
                if (level[row][col] === 1) {
                    unit.push(<Block key={`${row}-${col}`} />)
                } else if (row === pacman.y && col === pacman.x) {
                    unit.push(<PacMan key={`${row}-${col}`} />)
                } else if (row === inky.y && col === inky.x) {
                    unit.push(<Inky key={`${row}-${col}`} />)
                } else if (row === blinky.y && col === blinky.x) {
                    unit.push(<Blinky key={`${row}-${col}`} />)
                } else if (row === clyde.y && col === clyde.x) {
                    unit.push(<Clyde key={`${row}-${col}`} />)
                } else if (row === pinky.y && col === pinky.x) {
                    unit.push(<Pinky key={`${row}-${col}`} />)
                } else if (level[row][col] === 2) {
                    unit.push(<Path key={`${row}-${col}`} />)
                } else if (level[row][col] === 3) {
                    unit.push(<Coin key={`${row}-${col}`} />)
                } else if (level[row][col] === 4) {
                    unit.push(<Pill key={`${row}-${col}`} />)
                }
            }
        }
        return unit;
    }

    /*---------------------------------------------------------------------------- */
    /*---------------------------------------------------------------------------- */

    useEffect(() => {
        const interval = setInterval(() => {
            movePacman();
        }, 280);
        return () => clearInterval(interval);
    }, [direction, pacman]);

    function movePacman() {

        let newPacman = { ...pacman };
        let newLevel = [...level];

        if ((newLevel[newPacman.y][newPacman.x] !== 6) && (newLevel[newPacman.y][newPacman.x] !== 7) && (newLevel[newPacman.y][newPacman.x] !== 8) && (newLevel[newPacman.y][newPacman.x] !== 9)) {
            level[newPacman.y][newPacman.x] = 2
        }

        switch (direction) {
            case "left":
                if (status) {
                    if (newLevel[newPacman.y][newPacman.x - 1] !== 1) {
                        if (newLevel[newPacman.y][newPacman.x - 1] == 3) {
                            setScore(score + 2)
                        }
                        newPacman.x--;
                    }
                }
                break;
            case "up":
                if (status) {
                    if (newLevel[newPacman.y - 1][newPacman.x] !== 1) {
                        if (newLevel[newPacman.y - 1][newPacman.x] == 3) {
                            setScore(score + 2)
                        }
                        newPacman.y--;
                    }
                }
                break;
            case "right":
                if (status) {
                    if (newLevel[newPacman.y][newPacman.x + 1] !== 1) {
                        if (newLevel[newPacman.y][newPacman.x + 1] == 3) {
                            setScore(score + 2)
                        }
                        newPacman.x++;
                    }
                }
                break;
            case "down":
                if (status) {
                    if (newLevel[newPacman.y + 1][newPacman.x] !== 1) {
                        if (newLevel[newPacman.y + 1][newPacman.x] == 3) {
                            setScore(score + 2)
                        }
                        newPacman.y++;
                    }
                }
                break;
            default:
                break;
        }
        newLevel[newPacman.y][newPacman.x] = 5;
        setlevel(newLevel);
        setPacman(newPacman);
    }

    const handleKeyDown = (e) => {

        let newDirection = direction;

        switch (e.keyCode) {
            case 37: //left arrow
                setFace("left")
                newDirection = "left";
                break;
            case 38: // Up arrow
                setFace("up")
                newDirection = "up";
                break;
            case 39: // Right arrow
                setFace("PacMan")
                newDirection = "right";
                break;
            case 40: // Down arrow
                setFace("down")
                newDirection = "down";
                break;
            default:
                break;
        }
        setDirection(newDirection)
    };

    addEventListener("keypress", (handleKeyPress));

    function handleKeyPress(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 32: // Space bar                
                console.log(level);
            default:
                break;
        }
    }

    return (
        <div id="walls" className='borderBox' onKeyDown={handleKeyDown} onKeyPress={handleKeyPress} tabIndex="0">
            {walls()}
        </div>
    )
}

