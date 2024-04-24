import React, { useContext, useEffect } from 'react'
import "./Ghosts.css"
import { Context } from '../../Context/Context'

export default function Inky() {
    const { inky, setInky, level, setlevel, lost, setLost, status, setStatus } = useContext(Context)

    useEffect(() => {
        if (status) {
            const interval = setInterval(() => {
                moveInky();
            }, 280);
            return () => clearInterval(interval);
        }
    }, [level, inky]);

    useEffect(() => {
        const interval = setInterval(() => {
            inkyDirection;
        }, 40);
        return () => clearInterval(interval);
    }, [])

    let inkyDirection = Math.floor(Math.random() * 4)

    function moveInky() {
        let cyan = { ...inky };
        let newLevel = [...level];

        if ((newLevel[cyan.y][cyan.x] !== 3) && (newLevel[cyan.y][cyan.x] !== 4)) {
            newLevel[cyan.y][cyan.x] = 2;
        }

        if ((newLevel[cyan.y][cyan.x - 1] == 5) || (newLevel[cyan.y - 1][cyan.x] == 5) || (newLevel[cyan.y][cyan.x + 1] == 5) || (newLevel[cyan.y + 1][cyan.x] == 5)) {
            setLost(true)
        }

        switch (inkyDirection) {
            case 0: //left
                if ((newLevel[cyan.y][cyan.x - 1]) != 1 && (newLevel[cyan.y][cyan.x - 1]) != 7 && (newLevel[cyan.y][cyan.x - 1]) != 6 && (newLevel[cyan.y][cyan.x - 1]) != 9) {
                    cyan.x--;
                }
                break;
            case 1: //up
                if ((newLevel[cyan.y - 1][cyan.x]) != 1 && (newLevel[cyan.y - 1][cyan.x]) != 7 && (newLevel[cyan.y - 1][cyan.x]) != 6 && (newLevel[cyan.y - 1][cyan.x]) != 9) {
                    cyan.y--;
                }
                break;
            case 2: //right
                if ((newLevel[cyan.y][cyan.x + 1]) != 1 && (newLevel[cyan.y][cyan.x + 1]) != 7 && (newLevel[cyan.y][cyan.x + 1]) != 6 && (newLevel[cyan.y][cyan.x + 1]) != 9) {
                    cyan.x++;
                }
                break;
            case 3: //down
                if ((newLevel[cyan.y + 1][cyan.x]) != 1 && (newLevel[cyan.y + 1][cyan.x]) != 7 && (newLevel[cyan.y + 1][cyan.x]) != 6 && (newLevel[cyan.y + 1][cyan.x]) != 9) {
                    cyan.y++;
                }
                break;
            default:
                break;
        }
        setlevel(newLevel);
        setInky(cyan);
    }

    return (
        <div className="cyan">
            <div className='Ghosts'>
                <div className='ghost'>
                    <div className='ghostEyes'></div>
                    <div className='ghostEyes'></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                    <path fill="cyan" d="M0,64L10.9,96C21.8,128,44,192,65,192C87.3,192,109,128,131,122.7C152.7,117,175,171,196,170.7C218.2,171,240,117,262,112C283.6,107,305,149,327,154.7C349.1,160,371,128,393,133.3C414.5,139,436,181,458,181.3C480,181,502,139,524,144C545.5,149,567,203,589,192C610.9,181,633,107,655,90.7C676.4,75,698,117,720,149.3C741.8,181,764,203,785,181.3C807.3,160,829,96,851,96C872.7,96,895,160,916,165.3C938.2,171,960,117,982,106.7C1003.6,96,1025,128,1047,160C1069.1,192,1091,224,1113,208C1134.5,192,1156,128,1178,90.7C1200,53,1222,43,1244,48C1265.5,53,1287,75,1309,122.7C1330.9,171,1353,245,1375,234.7C1396.4,224,1418,128,1429,80L1440,32L1440,0L1429.1,0C1418.2,0,1396,0,1375,0C1352.7,0,1331,0,1309,0C1287.3,0,1265,0,1244,0C1221.8,0,1200,0,1178,0C1156.4,0,1135,0,1113,0C1090.9,0,1069,0,1047,0C1025.5,0,1004,0,982,0C960,0,938,0,916,0C894.5,0,873,0,851,0C829.1,0,807,0,785,0C763.6,0,742,0,720,0C698.2,0,676,0,655,0C632.7,0,611,0,589,0C567.3,0,545,0,524,0C501.8,0,480,0,458,0C436.4,0,415,0,393,0C370.9,0,349,0,327,0C305.5,0,284,0,262,0C240,0,218,0,196,0C174.5,0,153,0,131,0C109.1,0,87,0,65,0C43.6,0,22,0,11,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}

/* inky color
background: linear-gradient(rgb(0, 47, 255), rgb(0, 247, 255));
fill="rgb(0, 230, 255)"
*/