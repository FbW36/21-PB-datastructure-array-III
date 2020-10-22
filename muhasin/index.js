// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

const euroCity = euroCities[1];


// 2. Change the first item in the array to "Berlin".
euroCities.splice(0, 1);

//console.log(euroCities) // [ 'London', 'Valletta', 'Prague', 'Rome' ]
euroCities.unshift("Berlin");

// 3. Print the length of the array "euroCities".
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 4. Remove the last item of the array "euroCities".
euroCities.pop("-1");
// console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
// console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]


// 6. Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
// console.log(euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Hong kong", "Singapore", "Tokyo", "Bangkok", "Seoul"];

// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

const AsianCities2 = asianCities.slice(1, 4);
// console.log("AsianCities2 == >", AsianCities2) // AsianCities2 == > [ 'Singapore', 'Tokyo', 'Bangkok' ]


// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

const worldCities = euroCities.concat(asianCities);
console.log("worldCities ==>", worldCities); // worldCities ==> [ 'Berlin','Prague','Budapest','Hong kong','Singapore','Tokyo','Bangkok','Seoul' ]

// 10. Reverse the order of worldCities.

worldCities.reverse();
console.log("reverseWorldCities ==>", worldCities) // ==> [ 'Seoul','Bangkok','Tokyo','Singapore','Hong kong','Budapest','Prague','Berlin' ]

//  11. Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");
console.log("replace the 3rd item ==>", worldCities);

// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log("addedWashington ==>", worldCities); // ==> [ 'Seoul','Washington','Bangkok','Toronto','Singapore','Hong kong','Budapest','Prague','Berlin' ]


// 13. Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

worldCities.splice(0, worldCities.length, "Berlin", "London", "Bangkok", "Phnom Penh");
//console.log("wordCities2 ==>", worldCities); //  ==> [ 'Berlin', 'London', 'Bangkok', 'Phnom Penh' ]

console.log("worldCitiesOutPut ==>", worldCities.join()) // ==> Berlin,London,Bangkok,Phnom Penh

console.log("worldCitiesWith+ ==>", worldCities.join("+"));




// Bonus 

// 1. Write a program to reverse the string: "Hello World".

let str = "Hello World"
splitStr = str.split("");
console.log("splitStr ==>", splitStr);

let reverseStr = splitStr.reverse();
console.log("reverseStr ==>", reverseStr);
const reverse = reverseStr.join("");
console.log("reverse ===>", reverse); // ===> dlroW olleH

// Extra Practice 

// Make an array of your siblings' names or your favorite movie characters' names.
let chrNames = ["Alex", "Ben", "Maria"];

// Make an array of your parents' names.
let parentsNames = ["Kai", "Julia"];
//console.log("parentsNames == >", parentsNames) // == > [ 'Kai', 'Julia' ]
// Combine these two arrays.
let family = chrNames.concat(parentsNames);
// console.log("familty == >", family)


// Add your pets' names.
family.push("Robin");
// console.log("familty == >", family) // == > [ 'Alex', 'Ben', 'Maria', 'Kai', 'Julia', 'Robin' ]

// Reverse the order of the array.

family.reverse();
//console.log("familty == >", family); / / ['Robin', 'Julia', 'Kai', 'Maria', 'Ben', 'Alex']


// Access one of your parents' names.
family.splice(1, 2, );
//console.log("accessParentsName ==>", family); // ==> [ 'Robin', 'Maria', 'Ben', 'Alex' ]


// Update the name of one of your parents.
family.push("Julia");
console.log("familty == >", family); //  == > [ 'Robin', 'Maria', 'Ben', 'Alex', 'Julia' ]