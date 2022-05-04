//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    } 
}

class Fish extends Animal{
    constructor(name,species){
        super(name)
        this.species = species
    }
}

let simba = new Dog('Simba', 'Sheperd')

let nemo = new Fish('Nemo','ClownFish')