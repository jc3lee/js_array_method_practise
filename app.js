// 1) Turn an array of numbers into a total of all the numbers
const arr = [1, 2, 3];

const total = arr.reduce((a, b) => a + b, 0)
console.log("total", total)

// 2) Turn an array of numbers into a long string of all those numbers.
const nums = [2, 3, 4];

const string = nums.reduce((a, b) => a + b, "")
console.log("string", string)

// 3) Turn an array of voter objects into a count of how many people voted

let voters = [{
  name: 'Bob',
  age: 30,
  voted: true
},
{
  name: 'Jake',
  age: 32,
  voted: true
},
{
  name: 'Kate',
  age: 25,
  voted: false
},
{
  name: 'Sam',
  age: 20,
  voted: false
},
{
  name: 'Phil',
  age: 21,
  voted: true
},
{
  name: 'Ed',
  age: 55,
  voted: true
},
{
  name: 'Tami',
  age: 54,
  voted: true
},
{
  name: 'Mary',
  age: 31,
  voted: false
},
{
  name: 'Becky',
  age: 43,
  voted: false
},
{
  name: 'Joey',
  age: 41,
  voted: true
},
{
  name: 'Jeff',
  age: 30,
  voted: true
},
{
  name: 'Zack',
  age: 19,
  voted: false
}
];

const count = voters.reduce((a, b) => b.voted ? ++a : a, 0)
console.log("count", count)


// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [{
  title: "Tesla Model S",
  price: 90000
},
{
  title: "4 carat diamond ring",
  price: 45000
},
{
  title: "Fancy hacky Sack",
  price: 5
},
{
  title: "Gold fidgit spinner",
  price: 2000
},
{
  title: "A second Tesla Model S",
  price: 90000
}
];

const cost = wishlist.reduce((a, b) => a + b.price, 0)
console.log("cost", cost);

//5) Given an array of arrays, flatten them into a single array

let arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

const flattenedArray = arrays.reduce((a, b) => [...a, ...b], [])

console.log("flattenedArray", flattenedArray);

//6)Given an array of potential voters, return an object representing the results of the vote

/*

Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties.

Example result:

{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}

*/

const voters2 = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

const initialVotersObject = {
  youngVotes: 0,
  youth: 0,
  midVotes: 0,
  mids: 0,
  oldVotes: 0,
  olds: 0
}

const voterResults = voters2.reduce((a, b) => {
  if (b.age >= 18 && b.age <= 25) {
    a.youth++
    if (b.voted) {
      a.youngVotes++
    }
  } else if (b.age >= 26 && b.age <= 35) {
    a.mids++
    if (b.voted) {
      a.midVotes++
    }
  } else if (b.age >= 36 && b.age <= 55) {
    a.olds++
    if (b.voted) {
      a.oldVotes++
    }
  }
  return a
}, initialVotersObject)

console.log(voterResults) 
