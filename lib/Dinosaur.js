const Tamagochi = require('./Tamagochi')

class Dinosaur extends Tamagochi {
    
    health= 150
    cleanliness= 30
    happiness= 50

    sound= 'Rawr'
    skin= 'scales'

    constructor(petName, species){
    super(petName)
    this.species=species
    }

    dayChange(){
        const ageDamage= this.age*4

        this.age++
        this.health-ageDamage
        this.cleanliness-=15
        this.fullness-=15
        this.happiness -=10
        this.statsCheck()
        this.poopChance()
        this.makeSound()
    }
    //double age damage
}

module.exports=Dinosaur