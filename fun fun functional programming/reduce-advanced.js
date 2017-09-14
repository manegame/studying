// This should return an object with the tab separated file into categories

let fs = require('fs')

let output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customer, line) => {
    customer[line[0]] = customer[line[0]] || []
    customer[line[0]].push({
      name: line[1],
      price:  line[2],
      quantity: line[3]
    })
    return customer
  }, {})

console.log('output', JSON.stringify(output, null, 2))
