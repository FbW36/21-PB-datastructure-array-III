// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let englandCapital = euroCities[1];
console.log(englandCapital); // London

// 2. Change the first item in the array to "Berlin".
euroCities.unshift("Berlin");
console.log(euroCities); // [ 'Berlin', 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log(euroCities.length); //6

// 4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'Paris', 'London', 'Valletta', 'Prague' ]

// 5. Use an array method to add "Budapest" to the euroCities array.
console.log(euroCities.concat("Budapest")); // [ 'Berlin', 'Paris', 'London', 'Valletta', 'Prague', 'Budapest' ]
// if you want it permantan i would have used push()

// 6. ** Bonus **: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Beijing", "Hong Kong", "Mumbai", "Bangkok", "Tokyo"];

// 8. ** Bonus **: Use an array method to select items 2 - 4 from the array of asianCities and store this in another variable.
const takeThreeCities = asianCities.slice(1, 4);
console.log(takeThreeCities); // [ 'Hong Kong', 'Mumbai', 'Bangkok' ]

// 9. ** Bonus **: Use a method to concat euroCities with asianCities.Store the result in a variable(eg.worldCities).
const worldCities = euroCities.concat(asianCities);
console.log(
  worldCities
); /* [
'Berlin', 'Valletta',
    'Prague', 'Beijing',
    'Hong Kong', 'Mumbai',
    'Bangkok', 'Tokyo'
] */

// 10. Reverse the order of worldCities.
worldCities.reverse();
console.log(
  worldCities
); /* [
  'Tokyo',    'Bangkok',
  'Mumbai',   'Hong Kong',
  'Beijing',  'Prague',
  'Valletta', 'Berlin'
] */

// 11. ** Bonus **: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto");
console.log(
  worldCities
); /* [
  'Tokyo',    'Bangkok',
  'Toronto',  'Hong Kong',
  'Beijing',  'Prague',
  'Valletta', 'Berlin'
] */

// 12. ** Bonus **: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(
  worldCities
); /* [
  'Tokyo',     'Washington',
  'Bangkok',   'Toronto',
  'Hong Kong', 'Beijing',
  'Prague',    'Valletta',
  'Berlin'
] */

/* 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Outputs:
"Berlin , London, Bangkok, Phnom Penh"
 "Berlin+London+Bangkok+Phnom Penh" */
let worldCitiesToStr = worldCities.join(", ");
console.log(worldCitiesToStr); // okyo, Washington, Bangkok, Toronto, Hong Kong, Beijing, Prague, Valletta, Berlin

//! bonus
// 1. Write a program to reverse the string: "Hello World".
let greeting = "Hello World";
const arrGreeting = greeting.split("");
arrGreeting.reverse();
let reverseGreeting = arrGreeting.join("");
console.log(reverseGreeting); // dlroW olleH

//! extra practise
// 1. Make an array of your siblings' names or your favorite movie characters' names.
const siblings = ["Adam"];

// 2. Make an array of your parents' names.
const parents = ["Alan", "Rosemarie"];

// 3. Combine these two arrays.
const family = siblings.concat(parents);
console.log(family); // [ 'Adam', 'Alan', 'Rosemarie' ]

// 4. Add your pets' names.
const pets = [null];
const familyAndPets = family.concat(pets);
console.log(familyAndPets); // [ 'Adam', 'Alan', 'Rosemarie', null ]

// 5. Reverse the order of the array.
familyAndPets.reverse();
console.log(familyAndPets); // [ null, 'Rosemarie', 'Alan', 'Adam' ]

// 6. Access one of your parents' names.
let mother = familyAndPets[1];
console.log(mother); // Rosemarie

// 7. Update the name of one of your parents.
familyAndPets.splice(2, 1, "Imposter");
console.log(familyAndPets); // [ null, 'Rosemarie', 'Imposter', 'Adam' ]
