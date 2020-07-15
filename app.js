// 1) Turn an array of numbers into a total of all the numbers
const arr = [1, 2, 3];

const sum = arr.reduce((acc, currentVal) => {
  return acc + currentVal;
})

console.log(sum);

// 2) Turn an array of numbers into a long string of all those numbers.
const nums = [2, 3, 4];

const string = nums.reduce((accumulator, currentVal) => {
  return accumulator + currentVal.toString();
})

console.log(string);

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

let count = 0;
voters.forEach((voter) => {
  if (voter.voted === true) {
    count++;
  } else {
    count += 0;
  }
  return count;
});

console.log(count);

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

let totalCost = 0;
wishlist.forEach((item) => {
  totalCost += item.price;
  return totalCost;
});

console.log(totalCost);

//5) Given an array of arrays, flatten them into a single array

let arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

const combinedArray = [].concat.apply([], arrays);

console.log(combinedArray);