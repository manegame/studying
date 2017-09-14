// filter is a function on the array that will use take another function as its argument which it will use to return a new, filtered version of the array

let animals = [
  { name: 'Hector', species: 'dog' },
  { name: 'Caro', species: 'dog' },
  { name: 'Frederic', species: 'lizard' },
  { name: 'Stanline', species: 'Mouse' },
  { name: 'Ulrika', species: 'cat' },
  { name: 'Catman', species: 'cat man' },
  { name: 'Benedikte', species: 'snake' },
]

let isDog = (animal) => {
  return animal.species === 'dog'
}

// let dogs = animals.filter((animal) => {
//   return animal.species === 'dog'
// })

let dogs = animals.filter((animal) => {
    return animal.species === 'dog'
})

console.log(dogs)
