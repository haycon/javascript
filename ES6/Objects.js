//Example from https://scrimba.com/

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
