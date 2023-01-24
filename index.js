//computer choice
let computerChoice = () => {
   let choices = ['ROCK', 'PAPER', 'SCISSORS']
   let i = Math.floor(Math.random() * choices.length)
   return choices[i]
}
//SCORES TRACK
let scoreTrack = {
   computer: 0,
   user: 0
}

//user choice

let userChoice = document.querySelectorAll(".square")

userChoice.forEach(n => {
   n.onclick = () => {
      let computer = computerChoice()
      let userResult = juezChoice(n.value, computer)
      let computerResult = juezChoice(computer, n.value)

      if(userResult > computerResult){ 
         winner.innerText = "YOU WIN!"
      } else if( userResult < computerResult){
          winner.innerText = "YOU LOSE!"
         } else{
            winner.innerText = "DRAW" }
      
      
      scoreTrack["user"] += userResult
      scoreTrack["computer"] += computerResult

      domView(n.value, computer,  scoreTrack.user, scoreTrack.computer )

   }
});

//global variables
let hands = document.getElementById("hands")
let winner = document.getElementById("winner")
let score = document.getElementById("score")



let juezChoice = (user, computer) => {
   let count = 0 
   
   if(user == computer){
      count = count
      
   } else if(user == "ROCK" && computer == "SCISSORS"){
      count += 1
   } else if(user == "PAPER" && computer == "ROCK"){
      count += 1 
   } else if(user == "SCISSORS" && computer == "PAPER"){
      count += 1 
   } else{
      count -= 1

   }
   
  return count
}



// dom

let domView = (user, computer, userScore, computerScore ) => {
hands.innerText = `${user} vs ${computer}`
score.innerText = `User: ${userScore} vs Computer: ${computerScore}`
  
}

//global variables

let stopBtn = document.querySelector(".stop")
let reset = document.querySelector(".reset")

let gameStop = () => {
    stopBtn.onclick = () => {
      hands.innerText = ""
      if(scoreTrack.user > scoreTrack.computer){ 
         winner.innerText = "YOU WIN!"
      } else if( scoreTrack.user < scoreTrack.computer){
          winner.innerText = "YOU LOSE!"
         } else{
            winner.innerText = "DRAW" }
    }
}

let gameReset = () => {
   reset.onclick = () => {
   hands.innerText = ""
   winner.innerText = ""
   score.innerText = ""
   scoreTrack.user = 0
   scoreTrack.computer = 0
   }
}


gameStop()
gameReset()


//compare computer and user choice
//winner
//computer and user score
//reset bottom































// let hand = document.getElementById('hands')
// // create computer choice
// let computerChoice = () =>{
//    let choices = ["rock", 'paper', 'scissors']
//    let i = Math.floor(Math.random() * 3)
//    return choices[i]
// }



// //compare answer
// let gameResult = (playerChoice, computerChoice) =>{
//       let score = 0
//       if(playerChoice == computerChoice){
//          score = 0
//       } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
//          score = 1
//       } else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
//          score = 1
//       } else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
//          score = 1
//       } else {
//          score = -1
//       }
   
//       return score
//    }

   
// //display answer
// //update score
// //select winner
// //display winner































// let playerScores = {
//    player: 0,
//    computer: 0
//  }

// let computerChoice = () =>{
//    let choices = ['Rock', 'Paper', 'Scissors']
//    let computer = Math.floor(Math.random() * choices.length)
//    return choices[computer]
// }

// let gameResult = (playerChoice, computerChoice) =>{
//    let score = 0
//    if(playerChoice == computerChoice){
//       score = 0
//    } else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
//       score = 1
//    } else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
//       score = 1
//    } else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
//       score = 1
//    } else {
//       score = -1
//    }

//    return score
// }



// let hands = document.getElementById('hands')
// let score = document.getElementById('score')
// let winner = document.getElementById('winner')
// let stopBtn = document.querySelector('.stop')
// let resetBtn = document.querySelector('.reset')

// let rpsActive = (playerChoice) =>{

//    let computer = computerChoice()
//    let result = gameResult(playerChoice, computer)
//    let CompuScore = gameResult(computer, playerChoice)

//    hands.innerText = ` ${playerChoice} vs  ${computer}`
//    score.innerText = `playerScore ${playerScores['player']} vs computerScore ${playerScores['computer']}`

//      switch (result) {
//       case 1: winner.innerText = 'YOU WIN!'
//       break;
//       case -1: winner.innerText = 'YOU LOSE!'
//       break;
//       case 0: winner.innerText = 'DRAW'
//    }

//    playerScores['player'] += result
//    playerScores['computer'] += CompuScore

//   stopBtn.onclick = () =>{
//    hands.innerText = ""
//    if(playerScores['player'] > playerScores['computer'] ){
//       winner.innerText = "YOU WIN THE GAME"
//    } else if (playerScores['player'] <  playerScores['computer']){
//       winner.innerText = "YOU LOSE THE GAME"
//    } else{
//       winner.innerText = "DRAW"
//    }
// }

// resetBtn.onclick = () =>{
//    hands.innerText = ""
//    score.innerText = ""
//    winner.innerText = ""
//    playerScores['player'] = 0
//    playerScores['computer'] = 0
//   }
// }

// let square = document.querySelectorAll('.square')
// let rpsButton = () => {
//    square.forEach(square => {
//       square.onclick = () =>{
//          rpsActive(square.value)
//       }
//    })
// }


// rpsButton()
