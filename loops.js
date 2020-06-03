const listOfPets = [
    { name: "Pien",  type: "cat", age: 1, gender: "F", favFoods: [] },
    { name: "Diva", type: "cat", age: 5, gender: "F", favFoods: ["beef"] },
    { name: "Blub", type: "fish", age: 0, gender: "?", favFoods: [] },
    { name: "Froggy", type: "frog", age: 0, gender: "?", favFoods: [] },
    { name: "Kermit", type: "frog", age: 1, gender: "?", favFoods: [] },
    { name: "Froginta", type: "frog", age: 0, gender: "?", favFoods: [] },
]

function printAnimalName (pet){
    console.log("how does this work", pet.name)
}

//from this:
// console.log("Name of the animal", listOfPets[0].name)
// console.log("Name of the animal", listOfPets[1].name)
// console.log("Name of the animal", listOfPets[2].name)
// console.log("Name of the animal", listOfPets[3].name)

//to this:
for( let index = 0  ;   index < listOfPets.length  ;  index = index + 1   )  {
    //console.log("my pet is:", listOfPets[index].name)
} 

//  listOfPets.forEach(  function (pet){
//      console.log("what does forEach do?", pet.name)
//  })
 
listOfPets.forEach( sayHello )

function sayHello( animal, age ) {
    console.log("*****************")
    console.log("*   hello  ", animal.name)
    console.log("*   welcome!     ")
    console.log("*   Age:   ", animal.age)
    console.log("*****************")
}

listOfPets.forEach( printAnimalName)










