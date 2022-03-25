//Create a street fighter constructor that 
//makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(fighterName, fighterPower, fighterSpecialty, fighterElement){
    this.name = fighterName,
    this.power = fighterPower,
    this.specialty = fighterSpecialty,
    this.element = fighterElement,

    this.specialAbility = function(){
        alert(`Finish them with the ${this.specialty} specialty!`);
    }

    this.elementPower = function(){
        alert(`Finish them with the ${this.element} specialty!`);
    }
}