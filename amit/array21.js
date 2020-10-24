let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let second = euroCities[1];
console.log(second); //London

// 2 Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3 Print the length of the array "euroCities".
console.log(euroCities.length); // 5

// 4 Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5 Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

let slc = euroCities.slice(1, 3);
console.log(slc); // [ 'London', 'Valletta' ]

// 7 Create another variable named asianCities and assign an array of at least 5 cities to the variable.
// 8  Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let asianCities = ["Dhaka", "Singapore", "Sule", "Bangkok", "Tokyo"];
let store = asianCities.splice(1, 3);
console.log(store);

// 9 Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10 Reverse the order of worldCities.
console.log(worldCities.reverse());

// 11 Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);

// 12 Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(2, 0, "Washington");
console.log(worldCities);

// 13 write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

const worldCities2 = worldCities.toString();
console.log(worldCities2); // Tokyo,Dhaka,Washington,Toronto,Prague,Valletta,London,Berlin

const worldCities3 = worldCities.join("+");
console.log(worldCities3); //Tokyo+Dhaka+Washington+Toronto+Prague+Valletta+London+Berlin

let str = "Hello World";
let arr = str.split("");
console.log(arr);
//['H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd']

let reverse = arr.reverse();
console.log(reverse);
//['d', 'l', 'r', 'o','W', ' ', 'o', 'l','l', 'e', 'H']

let toString = reverse.join("");
console.log(toString); // dlroW olleH

//Print the results to the console.

const siblings = ["Roma", "trina"];
const parents = ["ma", "baba"];
const combine = siblings.concat(parents);
console.log(combine); //[ 'Roma', 'trina', 'ma', 'baba' ]
combine.push("Dog");
console.log(combine); //[ 'Roma', 'trina', 'ma', 'baba', 'Dog' ]
combine.reverse();
console.log(combine); // [ 'Dog', 'baba', 'ma', 'trina', 'Roma' ]

const access = combine[1];
console.log(access); // baba

const update = combine.splice(2, 1, "MOM");
console.log(update); // [ 'ma' ]
console.log(combine); // [ 'Dog', 'baba', 'MOM', 'trina', 'Roma' ]
