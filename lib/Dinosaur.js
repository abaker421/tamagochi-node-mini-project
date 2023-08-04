const Tamagochi = require('./Tamagochi')

class Dinosaur extends Tamagochi {
    
    health= Math.max(150, 150)
    cleanliness= Math.max(30, 80)
    happiness= Math.max(50, 100)

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