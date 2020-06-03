const listOfPets = [
    { name: "Pien",  type: "cat", age: 1, gender: "F", favFoods: [] },
    { name: "Diva", type: "cat", age: 5, gender: "F", favFoods: [] },
    { name: "Blub", type: "fish", age: 0, gender: "?", favFoods: [] },
    { name: "Froggy", type: "frog", age: 3, gender: "?", favFoods: [] },
    { name: "Kermit", type: "frog", age: 1, gender: "?", favFoods: [] },
    { name: "Froginta", type: "frog", age: 0, gender: "?", favFoods: [] },
]

//filter is used to return an list of items that match the search requirement 
//always use const, if not possible use let (don't use var)

const resultOfFilter =  listOfPets.filter(function(element){
    if(element.age >= 1){
        return true
    }
    else{
        return false
    }
})
// console.log("result of the filter function", resultOfFilter)

const listOfCats =  listOfPets.filter( function (animal){
    if(animal.type === "cat") return true
})


console.log("list of cats:", listOfCats)

