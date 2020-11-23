//Example from https://scrimba.com/
//courses.wesbos.com
const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles',
  },
};
console.log(player.address.city);
const {
  name,
  club,
  address: { city },
} = player;

console.log(`${name} lives in ${city}`);

const {
  name,
  age,
  projects: { dicegame },
} = student;

function addressMaker(city, state) {
  const newAdress = { city, state };

  console.log(newAdress);
}

addressMaker('Austin', 'Texas');

////
const person = {
  name: 'Wes Bos',
  age: 80,
};

// copy
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};
