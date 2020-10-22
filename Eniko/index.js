// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let london = euroCities.splice(1, 1);
console.log("assign the second item of the array as a value", london);

// Change the first item in the array to "Berlin".
euroCities[0] ="Berlin";
console.log("change first item to Berlin", euroCities);

// Print the length of the array "euroCities".
console.log("print the length of euroCities", euroCities.length);

// Remove the last item of the array "euroCities".
euroCities.pop();
console.log("remove list item of euroCites", euroCities);

// Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log("add Budapest", euroCities);

// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log("remove 2nd 3rd cities", euroCities);

// Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ["Tokyo", "Kyoto", "Osaka", "Nara", "Onomichi"];
console.log("create new variable with Asian cities", asianCities);

// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let partOfAsianCities = asianCities.slice(1, 4);
console.log("asianCites 2-4:", partOfAsianCities);

// Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = euroCities.concat(asianCities);
console.log("conat asianCites and europeanCites:", worldCities);

// Reverse the order of worldCities.
console.log("reverse world cities:", worldCities.reverse());

// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = "Toronto";
console.log("Replace 3rd item with Toronto", worldCities);

// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log("add Washington to 2nd place", worldCities);

// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
moreCities = euroCities.concat(worldCities);
// console.log(moreCities);
allCities = moreCities.concat(asianCities);
console.log("All the cities:", allCities.join("+"));
// Bonus

// Write a program to reverse the string: "Hello World".
let greeting = "Hello World";
let sliceGreeting = greeting.split("");
console.log(sliceGreeting);
let backwardsGreeting = sliceGreeting.reverse();
console.log(backwardsGreeting);
let finalGreeting = backwardsGreeting.join(" ");
console.log(finalGreeting);

// Extra Practice

// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.
let names = ["Zelda", "Link"];
// Make an array of your parents' names.
let moreNames = ["Böbe", "Janos"];
// Combine these two arrays.
let combinedNames = names.concat(moreNames);
console.log("combine two arrays", combinedNames);
// Add your pets' names.
let petNames = ["Ella", "Joise", "Buci"];
// Reverse the order of the array.
console.log("reverse pet names", petNames.reverse());
// Access one of your parents' names.
let oneParent = moreNames.splice(0, 1);
console.log("access one parent's name", oneParent);
// Update the name of one of your parents.
moreNames[0] = "Link";
moreNames[1] = "Zelda";
newParents = moreNames;
console.log("New parents", moreNames);