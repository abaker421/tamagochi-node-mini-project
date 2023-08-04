const Tamagochi = require('./Tamagochi');

class Snake extends Tamagochi {
  health = 60
  cleanliness = 30
  fullness = 30
  happiness = 50
  maxFullness= 70

  skin = 'scales'

  constructor(petName, species) {
    super(petName)
    this.species = 'snake'
  }//now even if a species is entered initally, it will change to snake

  dayChange() {
    this.age++;
    this.cleanliness -= 10
    this.fullness -= 10
    this.happiness -= 5
    this.statsCheck()
    this.poopChance()
    this.snakeBiteChance()
  }

  snakeBiteChance() {
    const randomNumber = Math.floor(Math.random() * 100)
      
    if (randomNumber === 0) {
      console.log( `${this.petName} bit you! You always knew you should have bought that antivenom.`)
      return newGame()
    }
  }

  makeSound() {
    const randomNumber = Math.floor(Math.random() * 11)
  
    if (randomNumber === 0) {
      console.log( `${this.petName} slithers silently underfoot`)
    }
  }
}

module.exports= Snake