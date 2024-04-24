import React from 'react'
import header from "../../assets/images/w0.png"

export default function Title() {
  return (
  <>
    <img className={"header"} src={header}/>
  </>
  )
}




    /*
    
        const handleKeyDown = (e) => {
            let newPacman = { ...pacman };
            let newLevel = { ...level };
            level[newPacman.y][newPacman.x] = 5;
    
            switch (e.keyCode) {
                case 32: // Space bar
                    console.log(level);
                case 37: // Left arrow
                    // level[newPacman.y][newPacman.x] = level[newPacman.y][newPacman.x] === 5 ? 2 : level[newPacman.y][newPacman.x];
                    if (newLevel[newPacman.y][newPacman.x - 1] !== 1) {
                        setFace("left")
                        level[newPacman.y][newPacman.x] = 2
                        newPacman.x--;
                    }
                    break;
                case 38: // Up arrow
                    if (newLevel[newPacman.y - 1][newPacman.x] !== 1) {
                        setFace("up")
                        level[newPacman.y][newPacman.x] = level[newPacman.y][newPacman.x] === 5 ? 2 : level[newPacman.y][newPacman.x];
                        newPacman.y--;
                    }
                    break;
                case 39: // Right arrow
                    if (newLevel[newPacman.y][newPacman.x + 1] !== 1) {
                        setFace("PacMan")
                        level[newPacman.y][newPacman.x] = level[newPacman.y][newPacman.x] === 5 ? 2 : level[newPacman.y][newPacman.x];
                        newPacman.x++;
                    }
                    break;
                case 40: // Down arrow
                    if (newLevel[newPacman.y + 1][newPacman.x] !== 1) {
                        setFace("down")
                        level[newPacman.y][newPacman.x] = level[newPacman.y][newPacman.x] === 5 ? 2 : level[newPacman.y][newPacman.x];
                        newPacman.y++;
                    }
                    break;
                default:
                    break;
            }
            setPacman(newPacman);
        };
    
        */