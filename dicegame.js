"use strict"
function addName(){
	let name = prompt("Please enter your name:");
	return name;
}
function addName(){
	let name = prompt("Please enter your name:");
	return name;
}
function getTroops(diceArray){
	let rollResults=[];
	for(let i=0; i<diceArray.length; i++) {
		let roll=rollDice(diceArray[i]);
		rollResults.push(roll-1);
			
	}
	let infantryNumber=rollResults[0]+rollResults[1];
	let artilleryNumber=rollResults[2]+rollResults[3]+rollResults[4];
	let vehiclesNumber=rollResults[5]
	let troops = [infantryNumber, artilleryNumber, vehiclesNumber];
	return troops;
}
		

function rollDice(diceNumber){
	let randomNumber=Math.floor(Math.random()*diceNumber + 1);
	return randomNumber;
}
function runGame(){
	
	let diceArray=[20,20,20,20,20,20];
	var playerOne = {
		"Name": "playerOne",
		"Score": 0,
		"Troops": []
	};
	let playerTwo =  {
		"Name": "playerTwo",
		"Score": 0,
		"Troops": []
	};
	playerOne["Name"] = prompt("Player One What is Your Name?")
	playerOne["Troops"] = getTroops(diceArray);
	playerTwo["Troops"] = getTroops(diceArray);

	console.log(playerOne["Troops"]);
	console.log(playerTwo["Troops"]);
	//here
	let infantryNumber=["You have ____ infantry."]
	let artilleryNumber=["You have ____ artillery."]
	let vehicleNumber=["You have ____ vehicles."]

}
runGame();