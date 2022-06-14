class mammal{
    constructor(name, age, species){
        this.name = name
        this.age = age
        this.species = species
    }
    toAge(years){
        this.age += years
    }
}

class lion extends mammal{
    eatZebras(animals){
        return animals.filter(animals => animals.species !== "zebra")
    }
}

let oreo = new mammal("Oreo",2,"gato")
let martin = new mammal("Marin",5,"zebra")
let simba = new lion("Simba",4,"leão")
let dumbo = new mammal ("Dumbo",2,"elefante")

let animals = [oreo,martin,dumbo,simba]
oreo.toAge(3)
console.log(simba.eatZebras(animals))

