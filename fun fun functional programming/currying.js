const _ = require('lodash')

// Not curried

let dragon = (name, size, element) =>
  name + ' is a ' +
  size + 'dragon that breathes ' +
  element + '!'

  dragon = _.curry(dragon)

  console.log(dragon('Swag', 'big', 'water'))

  console.log(dragon('Swag')('big')('water'))

// curried
// let dragon =
//   name =>
//     size =>
//       element =>
//         name + ' is a ' +
//         size + ' dragon that breathes ' +
//         element + '!'

let swagDragon = dragon('Swag')
let bigDragon = swagDragon('big')

console.log(bigDragon('water'))

// ––––––––––
// WHY CURRY?
// ––––––––––

/*
  In the following example it is shown.
  When we call hasElement with 'speed' it will return a new function, which in turn expects to be passed the object to check if it has element lightning. Which allows us to pass it as the callback function to filter directly.

  From the comment section:
  The result of hasElement('lighting') is
    function(object) { return object.element === element } 

  (or with ES6 arrow functions
    obj => obj.element === element
*/

let dragons = [
  {name: 'Dragon 1', element: 'water' },
  {name: 'Dragon 2', element: 'lightning' },
  {name: 'Dragon X', element: 'fire'},
  {name: 'Dragon Y', element: 'speed'},
  {name: 'Dragon XY', element: 'speed'},
]

// Non curried:
// let hasElement =
//   (element, obj) => obj.element === element
//
// let speedDragons =
//   dragons.filter(dragon => hasElement('speed', dragon))

// use lodash module to curry hasElement
let hasElement =
  _.curry((element, obj) => obj.element === element)

let speedDragons =
  dragons.filter(hasElement('speed'))


console.log('Speed dragons!' + JSON.stringify(speedDragons, null, 2))
