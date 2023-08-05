class Tamagochi {

    health= 100
    cleanliness=50
    fullness=100
    happiness=70
    age=0
    alive=true
    poopCount=0
    sound= ''

    maxFullness=100


    constructor(petName){
        this.petName=petName;
    }




//user actions, available as interactable options
       
    cleanPet(){
        this.poopCount=0 
        this.cleanliness+=30
        this.happiness+=4
        this.fullness-=3
        console.log( `${this.petName} had a bath!`)
        this.hourChange()
    }

    feedPet(){
       this.fullness+=30
       this.cleanliness-=2
       this.happiness+=5
       this.health+=5

       if (this.fullness>this.maxFullness){
        this.health-=3
        this.fullness-=2
        this.cleanliness-=2
        console.log( `${this.petName} is sick from overeating`)
       } else {
        console.log( `${this.petName} looks satisfied!`)
       }
       this.hourChange()
    }

    playWithPet(){
        this.fullness-=3
        this.cleanliness-=2
        this.happiness+=15
        console.log( `${this.petName} had a fun time playing with you!`)
        this.hourChange()
    }

//Game Mechanics

    newGame(){
    //generates a new Tamagochi
    }

    statsCheck(){
        if (this.poopCount>0){
            this.cleanliness-=this.poopCount
            this.happiness-=this.poopCount
            this.health-=this.poopCount
        }

        if (this.fullness <= 0){
            this.health -=10
        }

        if (this.happiness<=0){
            this.health -=5
        } 

        if (this.cleanliness <= 0) {
            this.health -=5
        }
        
        if (this.health<=0){
            this.alive=false
        } 

        if (!this.alive){
        console.log( `RIP ${this.petName}`)
        return newGame()
        }
    } //causes health damage if stats are low

    poopChance() {
        const randomNumber = Math.floor(Math.random() * 5)
      
        if (randomNumber === 0) {
          this.poopCount += 1
        }
    }

    makeSound(){
        const randomNumber = Math.floor(Math.random() * 11)
      
        if (randomNumber === 0) {
          console.log(`${this.petName} says ${this.sound}!`)
        }
    }

    hourChange(){
        this.fullness--
        this.happiness--
        this.health--
        this.displayPetStatus()
        this.poopChance()
        this.makeSound()
        this.displayPetStatus()
        this.statsCheck()
    }//happens 4 times, then dayNightChange. Runs poopChance() after statsCheck() to remove penalty for new poop

    eveningChange(){ 
        this.cleanliness-=5
        this.fullness -=10
        this.happiness -=5
        this.health--
        this.poopChance()
        this.makeSound()
        this.displayPetStatus()
        this.statsCheck()
    }

    dayChange(){
        const ageDamage= this.age*2

        this.age++
        this.health-=ageDamage
        this.cleanliness-=15
        this.fullness-=15
        this.happiness -=10
        this.health--
        this.poopChance()
        this.makeSound()
        this.displayPetStatus()
        this.statsCheck()
    }//happens every 2 day/night switches

    displayPetStatus(){

        let petName = this.petName

        if (this.cleanliness<30) {
            console.log(`${petName} is dirty!`)
        } else {
            console.log(`${petName} is clean!`)
        }
        
        if (this.fullness<50) {
            console.log(`${petName} eyes you hungrily!`)
        } else if (this.hunger>=30 && this.hunger<70){
            console.log(`${petName} could eat!`)
        } else {
            console.log(`${petName} is looking full!`)
        }
    }



}


module.exports = Tamagochi