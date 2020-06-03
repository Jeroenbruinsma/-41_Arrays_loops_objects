const people = [
    {name: "Jeroen", age: 31, gender: "M"},    
    {name: "Laura", age: 30, gender: "F"}
]


const listOfPets = [
    { name: "Pien",  type: "cat", age: 1, gender: "F", favFoods: [] },
    { name: "Diva", type: "cat", age: 5, gender: "F", favFoods: ["beef"] },
    { name: "Blub", type: "fish", age: 0, gender: "?", favFoods: [] }
]

const house = {people: people, pets: listOfPets}  //here i want everything what lives inside my house
// console.log("house", house)

// console.log("who are the pets in my house?", house.pets[0].name)
// console.log("who are the pets in my house?", house.pets[2].name)


// console.log("who are the pets in my house?", house.pets[1])
// console.log("who are the pets in my house?", house.pets[2])


//so 
//if I want an element from an array I use: [<elementNumber>]
//if I want an propery of an Object I  use: .<propertyName> (dot notation)
//if I want an propery of an Object I  use: [<property with space>] (brackets notation)








// console.log("Jeroen: ", people[0]) //first element of an array is element 0! 
// console.log("Laura: ", people[1])

// console.log('What is my listOfPets', listOfPets)
// console.log('What is my listOfPersons', people)



