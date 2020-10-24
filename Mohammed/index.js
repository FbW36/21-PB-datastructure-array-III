// 1-
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log("The original array is: ", euroCities);
// [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]

let city = euroCities.slice(1,2);
console.log("The original array is: ", euroCities); 
console.log("the second city is: ", city);
// [ 'London' ]

// 2- 
city = euroCities.splice(0, 1, 'Berlin');
console.log("The origina array after splice ", euroCities);
console.log(`The first city '${city}' is removed and replaced by 'Berlin' ==> ${euroCities}` ); 

// 3
console.log(`The length of the array ${euroCities} is ${euroCities.length}`);
// The length of the array Berlin,London,Valletta,Prague,Rome is 5

// 4 
euroCities.pop();
console.log(`The array after removing the last city/item ${euroCities}`);

// 5
euroCities.push('Budapest');
console.log(`The array after adding Budapest ==> ${euroCities}`);

// 6
euroCities.splice(1,2);
console.log(`The array after removing the 2nd and 3rd element ==> ${euroCities}`);

// 7
const asianCities = ['Sana\'a', 'Tokyo', 'Baghdad', 'Damascus', 'Amman'];
console.log("Asian cities are ==> ", asianCities);

// 8
let partOfAsianCities = asianCities.slice(1,4);
console.log("items 2-4 of asianCities are ", partOfAsianCities);

// 9
let worldCities = euroCities.concat(asianCities);
console.log("The concatenated array is==>", worldCities);

// 10
worldCities.reverse();
console.log(`The reverse order os the array worldCities ==> ${worldCities}` );

// 11
worldCities.splice(2,1,'Toronto');
console.log("Here", worldCities);

// 12
worldCities.splice(1,0, "Washington");
console.log("Washington is added at position 2 in the array", worldCities);

// 13
let toStrArr = worldCities.join(', ');
console.log("The worldCities array with comma separated characters\n", toStrArr);

toStrArr =worldCities.join('+');
console.log("The worldCities array with '+' separated characters\n", toStrArr);

// Bonus 1-
let str = 'Hello World';
let strToArr = str.split("");
console.log(strToArr);
strToArr.reverse();
console.log(strToArr);
str = strToArr.join('');
console.log(str);

// Extra Practice
// 1-
let siblings = ['Abdulkareem', 'Waleed', 'Ahmed', 'Ali'];

// 2-
let parents = ['Yahya', 'Saydah'];

// 3-
let familyMembers = parents.concat(siblings);
console.log(familyMembers);

// 4- 
familyMembers.push('HTML', 'CSS', 'JavaScript');
console.log(familyMembers);

// 5
familyMembers.reverse();
console.log('The reversed array ==> ', familyMembers);

// 6
let locationOf = familyMembers.indexOf('Yahya');
console.log("Accssed location at ", locationOf);

// 7
familyMembers.splice(locationOf, 1, 'Yahya Al-Mashraee');
console.log("Modified parent ", familyMembers);