const {Tamagochi, Dinosaur, Dog, Snake} = require('./lib')

const dino = new Dinosaur('Tim', 'Stegosaurus')

console.log(dino)

dino.dayChange()
dino.cleanPet()

console.log(dino)