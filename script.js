'use strict';

// LECTURES

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// METHODS
// slice

console.log(arr.slice(3));
console.log(arr.slice(1, 3));
console.log(arr.slice(-3));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// splice

console.log(arr.splice(-1));
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);

// join
console.log(letters.join(' - '));


// at method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // better

console.log('Krzysiek'.at(-1));


// FOREACH method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const move of movements) {
  if (move > 0) console.log(`You deposited ${move}`);
  else console.log(`You withdrew ${Math.abs(move)}`);
}
console.log('--- FOREACH ---');
let saldo = 0;
movements.forEach(function (move, index, array) { // continue and break don't work
  if (move > 0) console.log(`Movement ${index}: You deposited ${move}`);
  else console.log(`Movement ${index}: You withdrew ${Math.abs(move)}`);
  saldo += move;
  console.log(`Money ${saldo}`);
  if (index === array.length - 1) console.log(array);
});

// FOREACH on maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'USD', 'EUR']);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// MAP method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const moveUSD = movements.map(function (val, index, array) {
  return val * eurToUsd;
});
const moveUSDarrow = movements.map(val => val * eurToUsd);
console.log(movements);
//console.log(moveUSD);
console.log(moveUSDarrow);

const moveUSDof = [];
for (const mov of movements) moveUSDof.push(mov * eurToUsd);
//console.log(moveUSDof);

const movementsDescritpion = movements.map(
  (move, index) =>
  `Movement ${index}: You ${move > 0 ? 'deposited' : 'withdrew'} ${move}`
  );
  console.log(movementsDescritpion);
  
// FILTER method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// REDUCE method
// accumulator -> Zbiera całość
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, curr, i) => (acc += curr), 0); // <- start num
console.log(balance);

// maximum value;
const maxVal = movements.reduce(
  (acc, max) => (max > acc ? max : acc),
  movements[0]
  );
  console.log(maxVal);
  

// PIPELINE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * 1.1)
.reduce((acc, mov) => acc + mov);
console.log(totalDepositUSD);

// FIND method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.find(mov => mov < 0));

// SOME method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// EQUALITY
console.log(movements.includes(-130));
// CONDITION
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY method
console.log(movements.every(mov => mov !== 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));

// FLAT / FLATMAP methods
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[[1], 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(3));

// SORTING method

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //mutates array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// ascending order
console.log(movements.sort((a, b) => a - b));
// descending order
console.log(movements.sort((a, b) => b - a));

// FILL method
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
x.fill(0);
console.log(x);
const y = new Array(7).fill(0, 3, 5);
console.log(y);
arr.fill(23, 4, 6);
console.log(arr);

// Array.from()

const z = Array.from({ length: 7 }, () => 1);
const a = Array.from({ length: 7 }, (_, i) => i + 1);
const rand = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);
console.log(z);
console.log(a);
console.log(rand);
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
inputTransferAmount.value = inputTransferTo.value = '';
inputLoginUsername.value = inputLoginPin.value = '';
inputClosePin.value = inputCloseUsername.value = '';
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // EMPTY THIS ELEMENT

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${mov}€</div>
          </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html); // ADDING HTML
  });
};

const calcBalanceAndSummary = function (acc) {
  acc.balance = acc.movements.reduce((ac, val) => (ac += val), 0);
  const sumPlus = acc.movements
    .filter(val => val > 0)
    .reduce((ac, val) => (ac += val), 0);
  const sumMinus = acc.movements
    .filter(val => val < 0)
    .reduce((ac, val) => (ac += val), 0);
  const sumInterest = acc.movements
    .filter(val => val > 0)
    .map(val => (val * acc.interestRate) / 100)
    .filter(val => val > 1)
    .reduce((ac, val) => (ac += val), 0);
  labelBalance.textContent = `${acc.balance}€`;
  labelSumIn.textContent = `${sumPlus}€`;
  labelSumOut.textContent = `${Math.abs(sumMinus)}€`;
  labelSumInterest.textContent = `${sumInterest}€`;
  console.log(sumInterest);
};
accounts.forEach(function (account) {
  account.username = account.owner
    .split(' ')
    .map(part => part.at(0).toLowerCase())
    .join('');
});

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcBalanceAndSummary(acc);
  inputTransferAmount.value = inputTransferTo.value = '';
  inputLoginUsername.value = inputLoginPin.value = '';
  inputClosePin.value = inputCloseUsername.value = '';
  inputLoanAmount.value = '';
};
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //preventing form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display everything
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const toAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  if (
    toAcc &&
    toAcc !== currentAccount.username &&
    amount > 0 &&
    currentAccount.balance >= amount
  ) {
    currentAccount.movements.push(-amount);
    toAcc.movements.push(amount);
    displayMovements(currentAccount.movements);
    calcBalanceAndSummary(currentAccount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);

  if (loan > 0 && currentAccount.movements.some(mov => mov >= 0.1 * loan)) {
    currentAccount.movements.push(loan);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const delAcc = accounts.find(
    acc => acc.username === inputCloseUsername.value
  );
  const pin = Number(inputClosePin.value);

  if (delAcc && delAcc.pin === pin) {
    const index = accounts.findIndex(acc => acc.username === delAcc.username);
    accounts.splice(index, 1);
    inputClosePin.value = inputCloseUsername.value = '';
    if (delAcc.username === currentAccount.username) {
      containerApp.style.opacity = 0;
    }
  }
});

let sortedState = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});

//console.log(containerMovements.innerHTML);
// const user = 'Steven Thomas Williams';
// const username = user
//   .split(' ')
//   .map(part => part.at(0).toLowerCase())
//   .join('');
// console.log(username);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
const accountMovements = accounts.map(acc => acc.movements).flat();
const overallBalance = accountMovements.reduce((acc, mov) => acc + mov);
console.log(accountMovements);
console.log(overallBalance);

// FLATMAP -> FLAT + MAP

const overallBalanceFM = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overallBalanceFM);

// Movements UI
labelBalance.addEventListener('click', function (e) {
  e.preventDefault();
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(`${bankDepositSum}€`);

// 2.
const thousandMDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

const thousandMDeposit2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);
console.log(thousandMDeposit);
console.log(thousandMDeposit2);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, mov) => {
      sums[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase[0].toUpperCase() + titleCase.slice(1);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an example'));
*/
