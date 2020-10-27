// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].
//Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";

// Print the length of the array "euroCities".
console.log(euroCities.length);

//Remove the last item of the array "euroCities".
euroCities.pop();

//Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");

//Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities);

//Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Shangai", "Pekin", "Pjon Jang", "Tokyo", "Grullt"];

// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
console.log(asianCities.splice(2, 4));

//Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);

//Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

//Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");

//Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");

//Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh".
const joinedWorldCities = worldCities.join(" ");
const joinedWorldCitiesWithPlus = worldCities.join("+");
console.log(joinedWorldCities);
console.log(joinedWorldCitiesWithPlus);

//Write a program to reverse the string: "Hello World".
let helloWorld = "Hello World";
let reversedHelloWorld = helloWorld.split("").reverse().join("");
console.log(reversedHelloWorld);
/* 
let intNum = 54;
let fixedIntNum = intNum.toFixed(2);
console.log("fixedNum ==>", fixedIntNum); //54.00
console.log((Number(fixedIntNum) + 5).toFixed(2));
 */
