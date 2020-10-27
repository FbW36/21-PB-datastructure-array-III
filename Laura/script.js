// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
let second = euroCities[1];
console.log(second); // London

// 2. Change the first item in the array to "Berlin".
euroCities.splice(0, 1, "Berlin")
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// 6. **Bonus**: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Mumbai", ["Ho Chin Minh City"], ["Hanoi"], ["Kyoto"], ["Bali"]]

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
const anotherVar = asianCities.slice(1, 4);
console.log(anotherVar); // [ [ 'Ho Chin Minh City' ], [ 'Hanoi' ], [ 'Kyoto' ] ]

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10. Reverse the order of worldCities.
console.log(worldCities.reverse());

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto")
console.log(worldCities);

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 1, "Washington");
console.log(worldCities);

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string.
const worldCitiesString = worldCities.toString();
console.log(worldCitiesString); // Bali,Washington,Toronto,Ho Chin Minh City,Mumbai,Budapest,Prague,Berlin

// **Bonus**

// 1. Write a program to reverse the string: "Hello World".
const hello = ["Hello", "World"];
hello.reverse();
console.log(hello); // [ 'World', 'Hello' ]

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const siblings = ["Anya", "Lydia"]

// 2. Make an array of your parents' names.
const parents = ["Helga", "Ute"]

// 3. Combine these two arrays.
const combined = siblings.concat(parents);

// 4. Add your pets' names.
const pets = ["Salamanca", "Jijona"]
combined.push(pets);
console.log(combined); // [ 'Anya', 'Lydia', 'Helga', 'Ute', [ 'Salamanca', 'Jijona' ] ]

// 5. Reverse the order of the array.
console.log("reversed", combined.reverse()); // [ [ 'Salamanca', 'Jijona' ], 'Ute', 'Helga', 'Lydia', 'Anya' ]

// 6. Access one of your parents' names.
console.log("1 parent name", combined.splice(2, 1)); // [ 'Helga' ]

// 7. Update the name of one of your parents.
console.log("update", combined.splice(1, 1, "Jakob"));
console.log(combined); // [ [ 'Salamanca', 'Jijona' ], 'Jakob', 'Lydia', 'Anya' ]