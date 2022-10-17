class Dog {
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