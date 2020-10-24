//21-PB-datastructure-array-III
//Programming Basics: Arrays and Array Methods

//These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.

//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"]
const euroCities2 = euroCities[1]
console.log("1. my variable with array => ", euroCities)
console.log("1.1 variable with 2nd item  => ", euroCities2)

//2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin"
console.log("2. changing 1st item to Berlin", euroCities)
//3. Print the length of the array "euroCities".
console.log("3. length of array => ", euroCities.length)

//4. Remove the last item of the array "euroCities".
euroCities.pop()
console.log("4. Removing the last item Rome => ", euroCities)
//We got rid of 'Rome'...so now, length = 4

//5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest")
console.log("5. Adding Budapest => ", euroCities)

//6. Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(2, 1);
euroCities.splice(1, 1);
console.log("6. Removing 5th and 6th element => ", euroCities)

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Tokyo", "Seul", "Pekin", "Dubai", "Mumbai", "Manila"]
console.log("7. Pick your asian cities =>", asianCities)

// 8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

console.log("8. Selecting items 2-4 => ", asianCities.slice(1,4))

//9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

const worldCities = euroCities.concat(asianCities)
console.log("9. Concating both variables => ", worldCities)

//10. Reverse the order of worldCities.

console.log("10. Reverse the order => ", worldCities.reverse())


//11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2,3, "Toronto")
console.log("11. Replacing the 3rd item for 'Toronto =>", worldCities)



//12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1,0, 'Washington')
console.log("12. Remove 0 elements but insert Washington 2nd spot => ", worldCities)

//13. Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

worldCities.reverse()//Im reversing string 'cause Berlin it's in the beginning * 
const worldCitiesString = worldCities.join('+')
const worldCitiesString2 = worldCities.concat(" ", worldCitiesString)
console.log("13. Join two arrays into a string => ", worldCitiesString2.toString())

//14. Bonus Write a program to reverse the string: "Hello World".
const helloWorld = 'Hello World';
const helloWorld2 = helloWorld.split("");
console.log(helloWorld2); //'H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd'
helloWorld2.reverse()
const helloWorld3 = helloWorld2.join("")
console.log("14. reverse the string: 'Hello World'=> ", helloWorld3)

//Extra Practice

//Print the results to the console.

//1. Make an array of your siblings' names or your favorite movie characters' names.

const dudes = ["linda", "julius", "nicole", "claudia"]
console.log("1. Array with sibiling's names => ", dudes)

//2. Make an array of your parents' names.
const dads = ["maria", "roger"]
console.log("2. Array with parent's names => ", dads)

//3. Combine these two arrays.
const family = dads.concat(dudes)
console.log("3. combine those 2 arrays => ", family)

//4. Add your pets' names.
family.push("Neko", "Gummi")
console.log("4. add your pet's names => ", family)

//5. Reverse the order of the array.
console.log("5. reversing array's order => ", family.reverse())

//6. Access one of your parents' names.
const gettingDad= family.slice(6,7)
console.log("6. Acces one of your parent's names => ", gettingDad)

//7. Update the name of one of your parents.
family.splice(7,8, "maria conchita")
console.log("7. Update the name of one of your parents =>", family)