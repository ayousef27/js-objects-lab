const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}
//console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[58].name)
//console.log(game)
game.difficulty = 'Med'
const starterPokemon = pokemon.find((pokemon) => pokemon.starter === true)
game.party.push(starterPokemon)
const charmander = pokemon.find((pokemon) => pokemon.number === 4)
const pidgey = pokemon.find((pokemon) => pokemon.number === 16)
const squirtle = pokemon.find((pokemon) => pokemon.number === 7)
game.party.push(charmander, pidgey, squirtle)
//console.log(game)
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    game.completed = true
  }
})
//console.log(game)

game.party.splice(0, 1, pokemon[1])
game.party.splice(1, 1, pokemon[4])
game.party.splice(2, 1, pokemon[7])
game.party.splice(3, 1, pokemon[25])
console.log(game.party)

game.party.forEach((pokemon) => {
  //console.log(pokemon.name)
})

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log(pokemon[i].name)
  }
}
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
}

game.catchPokemon(pokemon[6])

console.log(game.party)

function catchPokemon(pokemonObj) {
  game.party.push(pokemonObj)

  const pokeballItem = game.items.find((item) => item.name === 'pokeball')

  if (pokeballItem) {
    pokeballItem.quantity -= 1
  }
}

catchPokemon(pokemon[0])

console.log(game.items)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})
console.log(game.gyms)

game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0
  }

  game.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  })

  console.log(gymTally)
}

game.gymStatus()

game.partyCount = function () {
  return game.party.length
}

console.log(game.partyCount())

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

console.log(game.gyms)

console.log(game)
