// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"] ;
const anotherVar = "London" ; 

// 2. Change the first item in the array to "Berlin".
euroCities[0] = 'Berlin' ; 
console.log('2 ==>', euroCities) ; // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log('3 ==>', euroCities.length) ; // 5

// 4. Remove the last item of the array "euroCities". 
console.log('4 ==>', euroCities.pop()) ; // Rome
console.log('4 ==>', euroCities) ; // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.push('Budapest') ;
console.log('5 ==>', euroCities) ; // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// 6. **Bonus**: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2) ;
console.log('6 ==>', euroCities) ; // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ['City1', 'City2','City3','City4','City5'] ;

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
const newAsianCities = asianCities.slice(1, 4) ;
console.log('newAsianCities ==>', newAsianCities) ; //  [ 'City2', 'City3', 'City4' ]

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities) ;
console.log('9 ==>', worldCities) ; // ['Berlin',   'Prague','Budapest', 'City1','City2','City3','City4',    'City5']

// 10. Reverse the order of worldCities.
worldCities.reverse() ;
console.log('10 ==>', worldCities) ; // ['City5',  'City4','City3',  'City2','City1',  'Budapest','Prague', 'Berlin']

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities[2] = 'Toronto' ;
console.log('11 ==>', worldCities) ; // ['City5',  'City4','Toronto',  'City2','City1',  'Budapest','Prague', 'Berlin']

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, 'Washington') ;
console.log('12 ==>', worldCities) ; // ['City5', 'Washington', 'City4','Toronto', 'City2','City1',  'Budapest','Prague', 'Berlin'] 

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string.
const stringCities = worldCities.toString() ; 
console.log('13 stringCities ==>', stringCities) ; //

// 14. Write a program to reverse the string: "Hello World".
const message = 'Hello World' ;
const changeMessage = message.split('') ; 
console.log('message ==>', changeMessage) ; //  'H', 'e', 'l', 'l','o', ' ', 'W', 'o', 'r', 'l', 'd', '!'
const reverseMessage = changeMessage.reverse();
console.log('reverseMessage ==>', reverseMessage) ; // ['!', 'd', 'l', 'r','o', 'W', ' ', 'o', 'l', 'l', 'e', 'H']
const joinedMessage = reverseMessage.join('');
console.log('joinedMessage ==>', joinedMessage) ; // dlroW olleH

// 14+1
let catName = 'Ior' ;
let catArr = catName.split('') ;
console.log('catName ==>', catArr) ; // [ 'I', 'o', 'r' ]
let catNameReversed = catArr.reverse() ;
console.log('catNameReversed ==>', catNameReversed) ; // [ 'r', 'o', 'I' ]
let joinedCatName = catNameReversed.join('') ;
console.log('joinedCatName ==>', joinedCatName) ; // roI

// 15. **Extra Practice**

// Make an array of your siblings' names or your favorite movie characters' names.
const siblings = ['Emma', 'Sebastian', 'Kristoffer', 'Sophie'] ;
// Make an array of your parents' names.
const parents = ['Karin', 'Ingvar'] ;
// Combine these two arrays.
const family = siblings.concat(parents) ; 
console.log('family ==>', family); // [ 'Emma', 'Sebastian', 'Kristoffer', 'Sophie', 'Karin', 'Ingvar' ]

// Add your pets' names.
family.push('Ior', 'Gunde', 'Ron', 'Oliver', 'Bagheera', 'Zelda') ;
console.log('family ==>', family) ; // ['Emma', 'Sebastian','Kristoffer', 'Sophie','Karin', 'Ingvar','Ior', 'Gunde','Ron','Oliver','Bagheera',   'Zelda']

// Reverse the order of the array. 
family.reverse() ;
console.log('family ==>', family) ; // ['Zelda','Bagheera','Oliver','Ron', 'Gunde','Ior','Ingvar','Karin','Sophie','Kristoffer','Sebastian', 'Emma'] 

// Access one of your parents' names.
console.log('Access parent name ==>', family[7]); // Karin

// Update the name of one of your parents. 
family[7] = 'Mum' ; 
console.log('name update ==>', family) ; // 'Mum'

