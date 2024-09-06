let person = {
    name: "John",
    age: 23,
    sayHi(){
        console.log("Hello my name is " + this.name)
    }
}

// person.name = "Jack" 
// person.favSongs = ["Wonderwall", "Champagne Supernova"]

person.sayHi()
console.log(person)
console.log(person["name"])
console.log("Hello")