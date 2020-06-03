const listOfPets = [
    { name: "Pien",  type: "cat", age: 1, gender: "F", favFoods: [] },
    { name: "Diva", type: "cat", age: 5, gender: "F", favFoods: [] },
    { name: "Blub", type: "fish", age: 0, gender: "?", favFoods: [] },
    { name: "Froggy", type: "frog", age: 0, gender: "?", favFoods: [] },
    { name: "Kermit", type: "frog", age: 1, gender: "?", favFoods: [] },
    { name: "Froginta", type: "frog", age: 0, gender: "?", favFoods: [] },
    { name: "Frogelientje", type: "frog", age: 0, gender: "?", favFoods: [] },
]
//.map is an array method [] -> [] 
const petNames = listOfPets.map(function(animal){
    return animal.name
})

listOfNames = ["Kagria", "Sock", "Pien"]

const namesInObject =  listOfNames.map(function(name){
    return {username: name , loginAttempts: 0, active: true, }
})

console.log("namesInObject",namesInObject )


