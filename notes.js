/*class Dog {
    hasTeeth() {
        console.log('Beware of Dog');
    }
}
class Chihuahaha extends Dog {
    hasTeeth() {
        super.hasTeeth() 
        console.log('Looks innocent, but')
    }
}   

class Puppy extends Dog {
    hasTeeth() {
        console.log('Miss you my boy');
    }
}
let louieBoi = new Chihuahaha();
let louie = new Puppy();

louieBoi.hasTeeth();
louie.hasTeeth();

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
let test = kiwiIcecream.meltIt('test');
console.log(test); 

let dog = new String('dog')
console.log(dog)*/

// extending class, first letter capital
class Train { 
// code defined in between the curly braces is the consturctor. Used to build properties on 
// future object instances.  
  constructor(color, lightsON) { 
// This represents the future object instance of the Train class
      this.color = color;
      this.lightsON = lightsON;
  }
    toggleLights() { /* This operator will change the value stored in the 
      lightsOn property of the future instance object of the Train class*/
        this.lightsOn = !this.lightsOn;
      /* the = operator to its left means that it will get assigned to this.lightsOn, 
      meaning that it will become the new value of the lightsOn property on that given instance object.*/
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    /*The lightsStatus() method on the Train class just reports the current 
    status of the lightsOn variable of a given object instance.*/
    }
    getSelf() {
        console.log(this);
    // will print out the properties of the object instance its called on 
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    /*console logs the prototype of the object instance of the Train class. The prototype 
    holds all the properties shared by all the object instances of the Train class. 
    To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, 
    and passing it this object - meaning, the object instance inside of which this method is invoked.*/ 
    }
}

/*let myFirstTrain = new Train("red", false);
let mySecondTrain = new Train('blue', true);

console.log(myForthTrain)
myForthTrain.toggleLights();
myForthTrain.lightsStatus();
console.log(myForthTrain)
let myForthTrain = new Train ('red', false)
myForthTrain.getSelf();
myForthTrain.getPrototype();*/

class HighspeedTrain extends Train {
  constructor (passengers, highSpeedOn, color, lightsOn) {
          super(color, lightsOn);
          this.passengers = passengers; //assin this on subsequent lines.
          this.highSpeedOn = highSpeedOn; // automatically inherit all methods on Train prototype
            // incl. togglelights, lightStatus, getSelf and getPrototype methods
  }
  toggleHighSpeed() {
          this.highSpeedOn = !this.highSpeedOn;
          console.log('High speed status:' , this.highSpeedOn);   
  }
  toggleLights() {
          super.toggleLights();
          super.lightsStatus();
          console.log('Lights are 100% operational.');
  }
}

let myFifthTrain = new Train('blue', false);
let highSpeed1 = new HighspeedTrain (300, false, 'black', false);

//myFifthTrain.toggleLights();
//myFifthTrain.lightsStatus();
myFifthTrain.toggleLights();
highSpeed1.toggleLights();
myFifthTrain.getPrototype();
highSpeed1.getPrototype()
HighspeedTrain.prototype.__proto__