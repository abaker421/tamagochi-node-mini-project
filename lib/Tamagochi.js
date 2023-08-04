class Tamagochi {

    health= Math.max(100, 100)
    cleanliness= Math.max(50, 100)
    fullness= Math.max(100, 150)
    happiness=Math.max(70, 100)
    age=0
    alive=true
    poopCount=0



    constructor(petName){
        this.petName=petName;
    }




//user actions, available as interactable options
       
    cleanPet(){
        this.poopCount=0 
        this.cleanliness+=30
        this.happiness+=Math.floor(Math.random()*5)
        this.fullness-=Math.floor(Math.random()*4)
        throw `${this.name} is squeaky clean!`
    }

    feedPet(){
       this.fullness+30
       this.cleanliness-=Math.floor(Math.random()*3)-2
       this.happiness+=Math.floor(Math.random()*3)+5

       if (this.fullness>100){
        this.health-Math.floor(Math.random()*6)
        this.fullness-Math.floor(Math.random()*9)-2
        this.cleanliness-Math.floor(Math.random()*6)-2
        throw `${this.name} is sick from overeating`
       } else {
        throw `${this.name} looks satisfied!`
       }
    }

    playWithPet(){
        this.fullness-=Math.floor(Math.random()*8)-=3
        this.cleanliness-=Math.floor(Math.random()*6)-=2
        this.happiness+=15
        throw `${this.name} had a fun time playing with you!`
    }

//Game Mechanics

    newGame(){
    //generates a new Tamagochi
    }

    statsCheck(){
        if (this.poopCount>0){
            this.cleanliness-=poopCount
            this.happiness-=poopCount
            this.health-=poopCount
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

        if (this.alive=false){
        throw `RIP ${this.name}`
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
          throw `${this.name} says ${this.sound}!`
        }
    }

    hourChange(){
        this.fullness--
        this.happiness--
        this.statsCheck()
        this.poopChance()
        this.makeSound()
    }//happens 4 times, then dayNightChange. Runs poopChance() after statsCheck() to remove penalty for new poop

    dayNightChange(){ 
        this.cleanliness-=5
        this.fullness -=10
        this.happiness -=5
        this.statsCheck()
        this.poopChance()
        this.makeSound()
    }

    dayChange(){
        const ageDamage= this.age*2

        this.age++
        this.health-=ageDamage
        this.cleanliness-=15
        this.fullness-=15
        this.happiness -=10
        this.statsCheck()
        this.poopChance()
        this.makeSound()
    }//happens every 2 day/night switches

}


module.exports = Tamagochi