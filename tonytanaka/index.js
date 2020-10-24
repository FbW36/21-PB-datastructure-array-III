/* 1. Declare a variable named "euroCities" and assign an 
array to the variable e.g. ["Paris", "London", "Valletta", 
"Prague", "Rome"]. Declare another variable and assign the 
second item of the array as a value. */
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let SecondCity = euroCities[1];
console.log("SecondCity ==>", SecondCity);

// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log("EuroCities ==>", euroCities);

// 3. Print the length of the array "euroCities".
console.log("euroCities Length ==>", euroCities.length);

// 4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log("euroCities poped ==>", euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log("euroCities pushed ==>", euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log("euroCities spliced ==>", euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
asianCities = ["Tokyo", "Hiroshima", "Hong-Kong", "Beijing", "Seoul"];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
chosenAsianCities = asianCities.slice(1, 4);
console.log("chosenAsianCities ==>", chosenAsianCities);

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
worldCities = euroCities.concat(asianCities);
console.log("worldCities ==>", worldCities);

// 10. Reverse the order of worldCities.
console.log("worldCities reversed ==>", worldCities.reverse());

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = "Toronto";

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 1, "Washington");
console.log("worldCities updated ==>", worldCities);

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string.
console.log("worldCities to string ==>", worldCities.toString());

// Bonus 01 - Write a program to reverse the string: "Hello World".
let str = "Hello World";
const arr = str.split("").reverse();
console.log("reversed String ==>", arr.join(""));

// Extra Practice
const friends = ["Joey", "Phoebe", "Chandler", "Monica", "Rachel", "Ross"];
const parents = ["Jose", "Catsuyo"];
const allFriends = friends.concat(parents);
allFriends.push("Trakina", "Kelly");
allFriends.reverse();
console.log("friends", allFriends);
let mother = allFriends[2];
console.log("Mother ==>", mother);
allFriends[3] = "Jose Yasuo";
console.log("friends", allFriends);
