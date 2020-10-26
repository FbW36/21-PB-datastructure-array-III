const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let second = euroCities[1];
console.log(second);
//2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities)

//3. Print the length of the array "euroCities".
console.log(euroCities.length)

//4. Delete the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities)

//5. Add "Budapest" to the euroCities array. 
euroCities.push('Budapest')
console.log(euroCities)


//6. Delete the second and third items from the euroCities array. 
euroCities.splice(1,2)

console.log(euroCities)

//7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

const asianCities = ['tokyo', 'singapole', 'bali','bankok', 'kyoto', 'hongkong']
const cloneAsianCities = asianCities.slice();
console.log(cloneAsianCities)

// const cloneAsianCities = [...asianCities];
// console.log(cloneAsianCities)


//8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

console.log(asianCities.splice(2,3).concat(euroCities));


// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
const worldCities =  euroCities.concat(asianCities);
console.log(worldCities)
// 10. Reverse the order of worldCities.
console.log(worldCities.reverse());
// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
console.log(worldCities)
worldCities.splice(2,1,'toronto');
console.log(worldCities)
// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1,0,'Washington');
console.log(worldCities)

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 
let joinWorld = worldCities.join(' , ');
console.log(joinWorld);
let joinWorld2 = worldCities.join('+');
console.log(joinWorld2);

// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 

let string = "Hello World";
let revString = string.split('').reverse().join('');
console.log(revString)

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.

let sib = ['toshiharu']
console.log(sib)
// 2. Make an array of your parents' names.
let par = ['masako', 'toshio']
console.log(par)

// 3. Combine these two arrays.
let fam = sib.concat(par);
console.log(fam)
// 4. Add your pets' names.
fam.push('nopet');
console.log(fam)
// 5. Reverse the order of the array.
fam.reverse();
console.log(fam)

// 6. Access one of your parents' names.
console.log(fam[2])
console.log(fam[fam.length-2])
// 7. Update the name of one of your parents. 
fam[2]= 'kazuko'
console.log(fam)