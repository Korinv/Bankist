'use strict';
/*
const juliasDogs1 = [3, 5, 2, 12, 7];
const katesDogs1 = [4, 1, 15, 8, 3];
const juliasDogs2 = [9, 16, 6, 8, 3];
const katesDogs2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaFixed = dogsJulia.slice(2, -2);
  const dogs = dogsJuliaFixed.concat(dogsKate);
  dogs.forEach(function (age, i) {
    if (age >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs(juliasDogs1, katesDogs1);
checkDogs(juliasDogs2, katesDogs2);

const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  const dogsToHumanAvg = dogs
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, index, arr) =>
      index === arr.length - 1 ? (acc + age) / (index + 1) : acc + age
    );
  console.log(dogsToHumanAvg);
};
calcAverageHumanAge(dogs1);
calcAverageHumanAge(dogs2);
*/
// TEST DATA:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.map(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const sarahDog = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > sarahDog.recFood * 0.9
    ? sarahDog.curFood < sarahDog.recFood * 1.1
      ? 'Dog eats fine'
      : 'Dog eats too much'
    : 'Dog eats too little'
);

// 3.
const [ownersEatTooMuchTemp, ownersEatTooLittleTemp] = dogs.reduce(
  (acc, dog) => {
    if (dog.curFood < dog.recFood * 0.9) {
      acc[1].push(dog.owners);
    }
    if (dog.curFood > dog.recFood * 1.1) {
      acc[0].push(dog.owners);
    }
    return acc;
  },
  [[], []]
);
const ownersEatTooLittle = ownersEatTooLittleTemp.flat();
const ownersEatTooMuch = ownersEatTooMuchTemp.flat();
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(
  `${ownersEatTooMuch[0]} and ${ownersEatTooMuch[1]} and ${ownersEatTooMuch[2]}'s dogs eat too much!`
);
console.log(
  `${ownersEatTooLittle[0]} and ${ownersEatTooLittle[1]}'s dogs eat too little!`
);

// 5.
const goodEat = dogs.filter(dog => dog.curFood === dog.recFood);
if (goodEat.length) {
  console.log(true);
} else {
  console.log(false);
}

//6.

const okayEat = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
if (okayEat.length) {
  console.log(true);
} else {
  console.log(false);
}

// 7.
console.log(okayEat);

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
