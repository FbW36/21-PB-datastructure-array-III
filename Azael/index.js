// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

// 2. Change the first item in the array to "Berlin".

euroCities.unshift("Berlin");

console.log("euroCities2 :>> ", euroCities);

// 3. Print the length of the array "euroCities".

console.log("euroCities3 length :>> ", euroCities.length);

// 4. Remove the last item of the array "euroCities".

euroCities.pop();

console.log("euroCities4 :>> ", euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");

console.log("euroCities5:>> ", euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);

console.log("euroCities6 :>> ", euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = [
  "Bangkok",
  "ChiangMai",
  "Pekin",
  "Wuhan",
  "Kioto",
  "Osaka",
];
// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

asianCitiesSlice = asianCities.slice(1, 4);
console.log("asianCities :>> ", asianCities);
console.log("asianCitiesSlice :>> ", asianCitiesSlice);

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

const worldCities = asianCities.concat(euroCities);

console.log("worldCities9 :>> ", worldCities);

// 10. Reverse the order of worldCities.

worldCities.reverse();

console.log("worldCities10 :>> ", worldCities);

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 1, "Toronto");

console.log("worldCities11 :>> ", worldCities);

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");

console.log("worldCities12 :>> ", worldCities);

/*13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Outputs: 
"Berlin , London, Bangkok, Phnom Penh"
"Berlin+London+Bangkok+Phnom Penh" */

console.log("worldCities joined :>> ", worldCities.join(", "));

console.log("worldCities12 :>> ", worldCities);

//**Bonus**

// 1. Write a program to reverse the string: "Hello World".

let str = "Hello World";
let splittedStr = str.split("");
let reverseSplittedStr = splittedStr.reverse();
let joinReverseSplittedStr = reverseSplittedStr.join("");
console.log("joinReverseSplittedStr :>> ", joinReverseSplittedStr);

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.

const characterNames = ["Darko", "Ace Ventura", "Han Solo", "Torrente"];
// 2. Make an array of your parents' names.
const parentNames = ["Taki", "Maite"];
// 3. Combine these two arrays.
const combinedNames = characterNames.concat(parentNames);
console.log("combinedNames :>> ", combinedNames);
// 4. Add your pets' names.

combinedNames.push("Lana");
console.log("combinedNames :>> ", combinedNames);

// 5. Reverse the order of the array.
combinedNames.reverse();
console.log("combinedNames :>> ", combinedNames);

// 6. Access one of your parents' names.
console.log("combinedNames :>> ", combinedNames[1]);

// 7. Update the name of one of your parents.
combinedNames[1] = "Mama";
combinedNames[2] = "Papa";

console.log("combinedNames :>> ", combinedNames);
