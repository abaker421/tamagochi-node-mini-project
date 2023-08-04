const Tamagochi = require('./Tamagochi');

class Snake extends Tamagochi {
  health = Math.max(60, 80)
  cleanliness = Math.max(20, 60)
  fullness = Math.max(50, 80)
  happiness = Math.max(50, 80)

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
      throw `${this.name} bit you! You always knew you should have bought that antivenom.`
      return newGame()
    }
  }

  makeSound() {
    const randomNumber = Math.floor(Math.random() * 11)
  
    if (randomNumber === 0) {
      throw `${this.name} slithers silently underfoot`
    }
  }
}

module.exports= Snake