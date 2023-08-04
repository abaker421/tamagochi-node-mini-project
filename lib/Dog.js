const Tamagochi = require('./Tamagochi')

class Dinosaur extends Tamagochi {
    
    fullness= Math.max(80, 100)
    happiness= Math.max(100, 120)


    sound= 'Woof'
    skin= 'fur'

    constructor(petName, species){
    super(petName)
    this.species=species
    }

    tailWag(){
        const randomNumber = Math.floor(Math.random() * 21)
      
        if (randomNumber === 0) {
          console.log( `${this.petName} wags their tail at you with a ${this.sound}!`)
        }
    }//5% change to get tail wag message, called every poopChance()

    poopChance() {
        const randomNumber = Math.floor(Math.random() * 5)
      
        if (randomNumber === 0) {
          this.poopCount += 1
        }
        this.tailWag()
    }
}