"use strict"

function runGame() {
	let diceArray = [4, 6, 8, 10, 12, 20];
	let	playerOne = {
		name: "Player One",
		troops: 9000000,
		total: 0
	};
		
	let playerTwo = {
		name: "Player Two",
		troops: 9000000,
		total: 0
	};

	while(playerOne.troops > 0 && playerTwo.troops > 0) {
		let playerOneRolls = rollAllDice(diceArray);
		let playerTwoRolls = rollAllDice(diceArray);

		playerOne.total = totalUpDiceRolls(playerOneRolls);
		playerTwo.total = totalUpDiceRolls(playerTwoRolls);
		adjustScoreAndCheckForWinner(playerOne, playerTwo);
	}
}

function rollAllDice(diceArray){
	let rollResults=[];
	for(let i=0; i<diceArray.length; i++){
		let roll=rollDie(diceArray[i]);
		rollResults.push(roll-1);
	}
	return rollResults;
}

function totalUpDiceRolls(rollResults){
	let totalTroops=rollResults[0]+rollResults[1]+rollResults[2]+rollResults[3]+rollResults[4]+rollResults[5];
	return totalTroops;
}

function rollDie(diceNumber){
	let randomNumber=Math.floor(Math.random()*diceNumber + 1);
	return randomNumber;
}

function adjustScoreAndCheckForWinner(playerOne, playerTwo){
	if (playerOne.total>playerTwo.total){
		playerOne.troops-=(playerOne.total + (playerOne.total-playerTwo.total))
	}
	else if (playerOne.total<playerTwo.total){
		playerTwo.troops-=(playerTwo.total + (playerTwo.total-playerOne.total))
	}


	if (playerOne.troops <= 0){
		console.log(playerTwo.name + " wins!");
	}
	else if (playerTwo.troops <= 0){
		console.log(playerOne.name + " wins!");
	}
}
runGame();