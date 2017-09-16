// map expects a transformed

let animals = [
  { name: 'Hector', species: 'dog' },
  { name: 'Caro', species: 'dog' },
  { name: 'Frederic', species: 'lizard' },
  { name: 'Stanline', species: 'Mouse' },
  { name: 'Ulrika', species: 'cat' },
  { name: 'Catman', species: 'cat man' },
  { name: 'Benedikte', species: 'snake' },
]

let names = animals.map((x) => x.name)
// let names = animals.map((animal) => {
//   return animal.name + ' is a ' + animal.species
// })

console.log(names)
