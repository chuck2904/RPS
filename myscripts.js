//SUCCESS: The below commented code is used to make sure that there is no bias in the computer's choice of 0,1,2  (rock, paper scissors)
/*
let x0= 0;
let x1= 0;
let x2= 0;

const trials = 100000;

for (var i = trials; i >= 0; i--) {
	switch(playComputerTurn()){
		case 0:
			x0+=1;
		break;

		case 1:
			x1+=1;
		break;


		case 2:
			x2+=1;
		break;
	}
}
console.log("0: "+x0+"("+Math.floor(x0/trials*10000)/100+"%)")
console.log("1: "+x1+"("+Math.floor(x1/trials*10000)/100+"%)")
console.log("2: "+x2+"("+Math.floor(x2/trials*10000)/100+"%)")

*/


//add the event listener "click" to the 3 html game buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(playGame(button.id));
  });
});


//utility functions. Note that: rock = 0, paper = 1, and scissors = 2 
function switchToNum(abc){
	let numValue=3;
	switch(abc){
		case "rock":
			numValue= 0;
		break;
		case "paper":
			numValue= 1;
		break;
		case "scissors":
			numValue= 2;
		break;
	}
	return numValue;
}

function switchToWord(abc){
	let wordValue = ""
	switch(abc){
		case 0:
			wordValue= "rock";
		break;

		case 1:
			wordValue= "paper";
		break;

		case 2:
			wordValue= "scissors";
		break;
	}
	return wordValue;
}

function playComputerTurn(){
	let precision = 1000000
	return (Math.floor(Math.random()*precision))%3;

}

function playGame(choice){
	let computerChoice = playComputerTurn();
	let result="Your "+choice+ " ";
	switch((computerChoice-switchToNum(choice)+3)%3){
		case 0:
			result+= "tied to "+switchToWord(computerChoice);
		break;

		case 1:
			result+= "lost to "+switchToWord(computerChoice);
		break;

		case 2:
			result+= "won to "+switchToWord(computerChoice);
		break;
	}
	return result;
}



