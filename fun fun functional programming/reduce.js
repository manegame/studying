// Reduce can be used to express any list transformation
// sum: initial value, order = iterated

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 700 },
  { amount: 100 },
  { amount: 130 }
]

let totalAmount = orders.reduce((sum, order) => {
  return sum + order.amount
}, 0)

console.log(totalAmount)
