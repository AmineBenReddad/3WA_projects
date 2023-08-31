let userChoice = document.getElementsByClassName("user-choice")
let robotChoice = document.getElementsByClassName("robot-choice")
let userTable = document.getElementById("user-table")
let robotTable = document.getElementById("robot-table")
let result = document.getElementById("result")
let userScore = document.getElementById("user-score")
let robotScore = document.getElementById("robot-score")



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function robot() {
    let ch = Math.floor(Math.random()*(3 -0) +0)
    if (ch == 0){
        return "Rock"
    }
    else if (ch == 1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function compare() {
    let u = userTable.innerHTML
    let r = robotTable.innerHTML
    if (u === r){
        return "Try again!"
    }
    else if ((u == "Rock" && r == "Scissors") || (u == "Paper" && r == "Rock") || (u == "Scissors" && r == "Paper")) {
        return "You won!!"
    }
    else 
    {
        return "Robot won :("
    }
}

let ui = 0
let ri = 0
Array.from(userChoice).forEach(e => {
    e.addEventListener('click', () => {
        if (e == userChoice[0]) {
            userTable.innerHTML = "Rock"
        }
        else if (e == userChoice[1]) {
            userTable.innerHTML = "Paper"
        }
        else  {
            userTable.innerHTML = "Scissors"
        }
        sleep(500)
        robotTable.innerHTML = robot()
        result.innerHTML = compare()
        if (result.innerHTML == "You won!!") {
            ui += 1
            userScore.innerHTML = `Score : ${ui} `
        }
        else if (result.innerHTML == "Robot won :(") {
            ri += 1
            robotScore.innerHTML = `Score : ${ri} `
        }

        if(ui == 3){
            result.innerHTML = "Congratulations!!!!"
            result.style.color = "green"
            ri = 0
            ui = 0
        }
        else if (ri == 3){
            result.innerHTML = "Game Over."
            result.style.color = "red"
            ri = 0
            ui = 0
        }

        if (result.innerHTML == "Game Over." || result.innerHTML == "Congratulations!!!!") {
            robotScore.innerHTML =""
            userScore.innerHTML =""
            // result.style.color = "black"
        }
        if (ui == 0 && ri == 0){
            result.style.color = "black"
        }
    })
})



