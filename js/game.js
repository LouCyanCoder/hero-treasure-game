// Hero position modifier and variables
const hero = document.querySelector('.hero');

    let heroPosY = 500;
    let heroPosX = 100;
    
    hero.style.top = heroPosY + "px";
    hero.style.left = heroPosX + "px";

// Ghost position modifier and variables
const ghost = document.querySelector('.ghost');

    let ghostPosY = 200;
    let ghostPosX = 600;

    ghost.style.top = ghostPosY + "px";
    ghost.style.left = ghostPosX + "px";

// Treasure position modifier and variables
const treasure = document.querySelector('.treasure');

    let treasurePosY = 0;
    let treasurePosX = 400;

    treasure.style.top = treasurePosY + 'px';
    treasure.style.left = treasurePosX + 'px';

// Hero movement wsad or arrows + win/lose function
document.addEventListener('keydown', (key) => {

    if ((key.code === 'ArrowUp' || key.code === "KeyW") && heroPosY > 0) {
        heroPosY -= 100;
        hero.style.top = heroPosY + "px";
        console.log(heroPosY)
        
    }
    else if ((key.code === 'ArrowDown' || key.code === "KeyS") && heroPosY < 500) {
        heroPosY += 100;
        hero.style.top = heroPosY + "px";
        console.log(heroPosY)
    }
        else if ((key.code === 'ArrowLeft' || key.code === "KeyA") && heroPosX > 0) {
        heroPosX -= 100;
        hero.style.left = heroPosX + "px";
        console.log(heroPosX)
    }
            else if ((key.code === 'ArrowRight' || key.code === "KeyD")  && heroPosX < 700) {
        heroPosX += 100;
        hero.style.left = heroPosX + "px";
        console.log(heroPosX)
    }
    else {
        console.log("Use arrows or WSAD keys to move the hero. Do NOT get out of bounds")
    }
    winningOrLosing()


})

// winning or losing conditions
const winningOrLosing = () => {
    if (heroPosX == treasurePosX && heroPosY == treasurePosY) {
        console.log("he should win by now")
        alert("You have won")
    }
    
    else if (heroPosX === ghostPosX && heroPosY === ghostPosY) {
        alert("You died. Git gud scrub")
    }
}

// fucking ghost movement increments

/*this equation always gives the same number. Dont know why. */

// let ghostMoveRandomizer(min, max) {
    //     return Math.random() *
    
    // }
    

// setting interval for ghost movement
    const ghostInterval = setInterval(() => {
    
        console.log("watch out for the ghost")
        console.log(ghostMoveIncrement)
        ghostMove()
    }, 1000)

    
    
    
    let ghostMoveIncrement = Math.floor(Math.random()*2)
    
    // ghost only moves diagonally
const ghostMove = () => {
    switch (ghostMoveIncrement) {
        case 1:
            ghost.style.top = ghostPosY + "px";
            ghost.style.left = ghostPosX + "px";
            ghostPosX += 100;
            ghostPosY += 100;
            break;
        case 0:
            ghost.style.top = ghostPosY + "px";
            ghost.style.left = ghostPosX + "px";
            ghostPosX -= 100;
            ghostPosY -= 100;
            break;
    }
        
// Daniels randomizer in range function

function getRandomInt(min, max) {
    min = Math.ceil(-100);
    max = Math.floor(100);
     return Math.floor(Math.random() * (max - min + 1)) + min;
                
    }
}