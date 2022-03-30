//Create a Tony Hawk Pro Skater constructor that 
//makes skating game characters with 4 properties and 3 methods

function makeSkater(chName,chStance,chSponsor,chMove){
    this.characterName = chName
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove

    this.flip = function(){
        console.log('Kickflip!!');
    }
    this.taunt = function(){
        console.log(`Dont make me use my ${this.specialMove}`);
    }
    this.grab = function(){
        console.log('MELON');
    }
}

let bamMargera = new makeSkater('Bam', 'Goofy', 'Black Diamond','Ghetto Bird');