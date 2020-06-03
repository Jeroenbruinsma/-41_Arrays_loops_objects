const listOfPets = [
    { name: "Pien",  type: "cat", age: 1, gender: "F", favFoods: [] },
    { name: "Diva", type: "cat", age: 5, gender: "F", favFoods: ["beef"] },
    { name: "Blub", type: "fish", age: 0, gender: "?", favFoods: [] },
    { name: "Froggy", type: "frog", age: 0, gender: "?", favFoods: [] },
    { name: "Kermit", type: "frog", age: 1, gender: "?", favFoods: [] },
    { name: "Froginta", type: "frog", age: 0, gender: "?", favFoods: [] },
]

console.log("hello from find.js")

const resultOfFind =  listOfPets.find(  function (element){
    // console.log("what is element?", element)
    if(element.name === "Pientje"){
        return true
    }else{
        return false
    }
} )

if(!resultOfFind){
    console.log("could not find animal")
}else{
    console.log("what us the result of the find function", resultOfFind)
}
