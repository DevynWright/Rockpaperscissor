var choices = [
  'Rock',
  'Paper',
  'Scissors'
];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

let answer = ''



function play(playerChoice) {
  if (playerChoice == computerChoice){
    answer = "Tie!"
  }
  else if (playerChoice === "Rock" && computerChoice === "Paper") {
 		answer = "Defeat!";
 	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
 		answer = "Victory!";
 	

 	} else if (playerChoice === "Paper" && computerChoice === "Rock") {
 		answer = "Victory!";
 	} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
 		answer = "Defeat!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
 		answer = "Defeat!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
 		answer = "Victory!";
 	}
   document.querySelector("#results").innerText = answer
}