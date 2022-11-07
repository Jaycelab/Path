let pets = [
{name: "Snickers", species: "Cat", age: 16}, 
{name: "Louie", species: "Dog", age: 12}, 
{name: "Jacob", species: "Dog", age: 7},
{name: "Pebbles", species: 'Dog', age: 12},
];

console.log(pets.push({name: "Buddy", species: "Dog", age: 13}))

// Map does not mutate or change the array that you call it from
// Instead, it returns a new value which is a brand new separate array
// Function will call once for each item in the pets array with the map
// method. In summary, it will loop through the entire array in
// In this case 5 items since we pushed 1 additional item

//Here we are assigning a new var to the pets.map with the nameOnly method
let ourTests = pets.map(nameOnly)

function nameOnly() {
// Whatever this function returns will get added on to the brand new array
	return "hello"
}

//Results below will result in a new array of 5 'hello'. Which includes our
//original number of indices & the results from the nameOnly method in
//which we assigned to ourTests variable.
console.log(ourTests)