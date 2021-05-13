// will be asked on interview
var pokemon = {
  firstName: "Pika",
  lastName: "chu",
  getPokeName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
};

var pokemonName = function (snack, hobby) {
  //   console.log(this.getPokeName() + " I choose you");
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

// 1.bind: create a new function, that when called, has its this keyword
// set to the provided context.

// //redirect this keyword
// var bindPokemon = pokemonName.bind(pokemon);
// bindPokemon("sushi", "js");

// 2. call: call a function
// with a given this and arguments provides individually.
pokemonName.call(pokemon, "sushi", "js");

// 3. apply: provide parameters as array
pokemonName.apply(pokemon, ["sushi", "js"]);
