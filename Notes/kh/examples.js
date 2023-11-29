//if-else
/*let cost = 1250;

if (cost < 1000) {
	console.log("No discount applicable");
} else {
	console.log("Your total is", cost);
}

let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
	console.log("Good Morning");
} else {
	console.log("Good Night");
}
*/
//SWITCH
let a = 20;
let b = 50;
let action = "DIVIDE";

//action is used as an expression to match against the used cases
//case is used to execute if truthy
//break is needed to stop a condition check regardless if truthy
switch (action) {
	case "ADD": {
		let sum = a + b;
		console.log(`The sum of ${a} and ${b} is ${sum}`);
		break;
	}
	case "SUBTRACT": {
		let diff = a - b;
		console.log(`The subtraction of ${a} and ${b} is ${diff}`);
		break;
	}
	case "MULTIPLY": {
		let mul = a * b;
		console.log(`The multiplicatoin of ${a} and ${b} is ${mul}`);
		break;
	}
	case "DIVIDE": {
		let div = a / b;
		console.log(`The division of ${a} and ${b} is ${div}`);
		break;
	}
	//default is used if no condition is met, We an also throw an error code
	default: {
		throw new Error("Invalid action. Please select again");
	}
}

// switch can also be used to keep slipping without having to set a statement until a condition is truthy. It will slip through all the cases until the very last condition before the break statement. It is important to use a break statement when applying this method

let item = "Eggplant";
let type; //will be assinging using case below

switch (item) {
	case "Apple":
	case "Banana":
	case "Orange":
	case "Strawberry":
	case "Kiwi":
	case "Mango":
		type = "fruit";
		console.log(`The type ${item} is ${type}`);
		break;
	case "Lettuce":
	case "Potato":
	case "Celery":
	case "Eggplant":
		type = "vegetable";
		console.log(`The type of ${item} is ${type}`);
		break;
	default: {
		throw new Error("Unable to identify item...");
	}
}
