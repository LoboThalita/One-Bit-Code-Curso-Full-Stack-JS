class animal{
    constructor(species, name, age, maxAge){
        this.species = species
        this.name = name
        this.age = age
        this.maxAge = maxAge
    }
    toAge(years){
        this.age += years
        if(this.age > this.maxAge){
            alert(this.name + " morreu.")
        }
    }
}

class oviparous extends animal{
    constructor(species, name, age, maxAge,maxEggs){
        super(species, name, age, maxAge)
        this.maxEggs = maxEggs
    }
    toAge(years){
        years /= 2
        super.toAge(years)
    }
}

let claudia = new oviparous("naja","Claudia",2,5,100)
console.log(claudia)
claudia.toAge(10)
console.log(claudia)