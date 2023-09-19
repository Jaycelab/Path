
 function lifeInWeeks(age) {
 	// let omited but need to doublecheck if considered clean code
 	yearsRemaining = 90 - age;
 	daysRemaining = yearsRemaining * 365;
 	weeksRemaining = yearsRemaining * 52;
 	monthsRemaining = yearsRemaining * 12;
  console.log(`You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left`)
 }

lifeInWeeks(35)
