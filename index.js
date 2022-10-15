let size = 8;
let board = "";

// looping row
for (y = 0; y <= size; y++){
// looping column 
  for (x = 0; x <= size; x++)
// if even, add space
    if ((x + y) % 2 === 0) {
      board += " ";
// if odd, add #     
    } else {
      board += "#"; 
}
  board += "\n";
}

console.log(board);


//print 1-100, %3 fizz, %5 buzz, both fizzbuzz



for (let i = 1; i <=100; i++) {
   let foo = "";
  if (i % 3 === 0)
    foo += "Fizz";
  if (i % 5 === 0)
    foo += "Buzz";
  console.log(foo || i)
}


//# Pyramid

for (let i = "#"; i.length < 8; i += "#")
  console.log(i);
