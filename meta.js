/*class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }

    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,'Results: ', false);
fail.calculate(); 


class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6*/



class Animal {
	constructor (color, energy) {
		this.color = color,
		this. energy = energy,
	}

	/* when ran, will lower value of energy until 0. It will also report
	updated value of energy. If energy is 0, animal object will go to sleep,
	by invoking sleep() method based on condition */
	isActive() {
	// if energy is > 0, energy -= 20, console.log energy
	// else if energy <= 0, sleep()
	 };

	 sleep() {
	// energy += 20
	//console.log energy 
	 };

	getColor() {

	 };
}

class Cat extends Animal {
	constructor (sound, canJumpHigh, canClimbTrees) {
		this.sound = sound,
		this.canJumpHigh = canJumpHigh,
		this.canClimbTrees = canClimbTrees,
	}
	makeSound() {
		//log makeSound
	};
}

class Bird extends Animal {
	constructor (sound, canFly,color, energy) {
		super(sound, canFly);
	}
	makeSound() {
		//log makeSound
	};
}

class Housecat extends Cat {
	constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy){
		this.houseCatSound = houseCatSound,
	}
	makeSound() {
		if (this.makeSound)
			//run super.makeSound. Run code from Cat +  
		    //console.log(this.houseCatSound)

	};
}

class Tiger extends Cat {
	constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy) {
		this.tigerSound = tigerSound,
	}
}

class Parrot extends Bird {
	constructor (canTalk, sound, canFly,color, energy,  color, energy);
	this.canTalk = canTalk;

	makeSound() {
		//2 conditionals. Check if "true" was passed to super.makeSound during invocation
		// Checks value stored inside this.canTalk propery, Logs 'talking '
	}
}