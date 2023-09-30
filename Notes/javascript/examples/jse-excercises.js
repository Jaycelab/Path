/*Task 3
Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred. Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.*/

let first = Number(prompt('Pick a first number'));
let second = Number(prompt('Pick a second number'));
let operands = prompt('Enter an opparand (+, -, / , *)');
let result;

if (!Number.isNaN(first) && !Number.isNaN(second)) {
	switch(operands) {
		case '+': result = first + second;
			break;
		case '-': result = first - second;
			break;
		case '/': result = first / second;
			break;
		case '*': result = first * second;
			break;
		default: result = "Error: unknown operand";		
	}
} else {
	result = "Please enter a valid number"
}
alert(result)