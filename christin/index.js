/*Programming Basics: Arrays and Array Methods
These exercises are designed for practicing arrays and array methods.You may need to look up some methods to complete these tasks.Print each result to the console.*/

//?  1.Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

const capital = "London";

//? 2. Change the first item in the array to "Berlin".

euroCities2 = euroCities.splice(0, 1, "Berlin");

console.log(("Replace:", euroCities)); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

//? 3.Print the length of the array "euroCities".

console.log("euroCities.length:", euroCities.length); // 5

//? 4. Remove the last item of the array "euroCities".

euroCities.pop();

console.log("pop last item:", euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

//? 5.Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");

console.log("push Budapest:", euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

//? 6. Bonus: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log("delete 2,3:", euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

//? 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Jakarta", "Tokio", "Hongkong", "Denpasar", "Singapur"];

//? 8. Bonus: Use an array method to select items 2 - 4 from the array of asianCities and store this in another variable.

const asianCitiesPartial = asianCities.slice(1, 4);
console.log("slice 2-4 :", asianCitiesPartial); // [ 'Tokio', 'Hongkong', 'Denpasar' ]

//? 9.Bonus: Use a method to concat euroCities with asianCities.Store the result in a variable(eg.worldCities).

const worldCities = euroCities.concat(asianCities);

console.log("worldCities:", worldCities);
/* [
  'Berlin',   'Prague',
  'Budapest', 'Jakarta',
  'Tokio',    'Hongkong',
  'Denpasar', 'Singapur'
] */

//? 10.Reverse the order of worldCities.

worldCities.reverse();

console.log("rev worldCities:", worldCities);
/* [
  'Singapur', 'Denpasar',
  'Hongkong', 'Tokio',
  'Jakarta',  'Budapest',
  'Prague',   'Berlin'
]*/

//? 11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");
console.log("insert toronto in worldCities:", worldCities);
/*[
  'Singapur', 'Denpasar',
  'Toronto',  'Tokio',
  'Jakarta',  'Budapest',
  'Prague',   'Berlin'
] */

//? 12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");
console.log("insert toronto in worldCities:", worldCities);
/* [
  'Singapur', 'Washington',
  'Denpasar', 'Toronto',
  'Tokio',    'Jakarta',
  'Budapest', 'Prague',
  'Berlin'
] */

//? 13. Bonus Write a program to join all elements of the result(worldCities) into a string.Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

const worldCitiesString = worldCities.toString();

console.log("WorldCities string:", worldCitiesString); // Singapur,Washington,Denpasar,Toronto,Tokio,Jakarta,Budapest,Prague,Berlin

// ----------------------------#####---------------------------

//! Bonus

//? 1. Write a program to reverse the string: "Hello World".

let string = "Hello World";

// opt 1
const stringArray = string.split(" ");
stringArray.reverse();
console.log(stringArray); // [ 'World', 'Hello' ]

// opt 2

const stringArray2 = string.split("");
stringArray2.reverse();
console.log(stringArray2);
/* [
  'd', 'l', 'r', 'o',
  'W', ' ', 'o', 'l',
  'l', 'e', 'H'
]*/

//!Extra Practice

//Print the results to the console.

//? 1. Make an array of your siblings' names or your favorite movie characters' names.

const siblings = ["loreen", "verena", "jacob", "schmucki"];

//? 2. Make an array of your parents' names.

const parents = ["beate", "dirk"];

//? 3. Combine these two arrays.

const family = parents.concat(siblings);
console.log(family); // [ 'beate', 'dirk', 'loreen', 'verena', 'jacob', 'schmucki' ]

//? 4. Add your pets' names.

family.push("jasper", "schnuffi");
console.log(family);
/* [
  'beate',  'dirk',
  'loreen', 'verena',
  'jacob',  'schmucki',
  'jasper', 'schnuffi'
]*/

//? 5. Reverse the order of the array.

family.reverse();

//? 6.Access one of your parents' names.

const mom = family.slice(-1)[0];
console.log(mom); // beate

//? 7. Update the name of one of your parents.

family.splice(-2, 1, "torsten");
console.log(family);
/*  'schnuffi', 'jasper',
'schmucki', 'jacob',
    'verena', 'loreen',
    'torsten', 'beate'
*/
