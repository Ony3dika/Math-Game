/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses = 3
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let guess=document.getElementById("guess-input")

let btn=document.getElementById("guess-value")

let message=document.querySelector(".message")

let g_over=document.querySelector(".over")

let n_guess=document.querySelector(".ng")

g_over.style.display="none"

let replay=document.querySelector(".replay")

replay.style.display="none"

//Number Generator

function randomnumber(min,max){

    return Math.floor( Math.random()*(max - min + 1)) + min;
}

let ans=randomnumber(1,10)

console.log(ans)

let amt_guess=0;

///////////////////////////

//Game Function

btn.addEventListener("click", game)

function game(e){

    e.preventDefault()

    let attempt=guess.value

    if(attempt == ans){
        message.innerText="Congrats, You Won !!!"
    }

    else{
        message.innerText="Try Again"

        amt_guess+=1
    }

    //Guesses Left

    let moan=3

    moan -= 1

    console.log(moan)

    n_guess.textContent="You have " + moan + " guesses left"

    if (moan -- ){

        n_guess.textContent="You have 1 guess left"

    }

    //Removing & Showing Elements

    if (amt_guess == 3){
        guess.remove()

        btn.remove()

        n_guess.remove()

        g_over.style.display="block"

        replay.style.display="block"

        message.textContent="The Number was " + ans
    }
}



