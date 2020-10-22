let log = console.log;

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const anotherVar = euroCities[1];
log('anotherVar -->', anotherVar)

// Change the first item in the array to "Berlin"
euroCities[0] = 'Berlin';
log('first item changed to Berlin', euroCities);

// Print the length of the array "euroCities"
log('length of euroCities -->', euroCities.length);

// Remove the last item of the array "euroCities"
euroCities.pop();
log('last item removed -->', euroCities);

// Use an array method to add "Budapest" to the euroCities array
euroCities.push('Budapest');
log('Budapest added -->', euroCities);

// Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
log('two items removed -->', euroCities);

// Create another variable named asianCities and assign an array of at least 5 cities to the variable
const asianCities = ['Vladivostok','Wuhan','Kyoto','Fallujah','Jammu']

// Use an array method to select items 2-4 from the array of asianCities and store this in another variable
const threeItems = asianCities.slice(1,4);
log('items 2-4 in new variable -->',threeItems);

// Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities)
const worldCities = euroCities.concat(asianCities);
log('Euroasia -->', worldCities);

// Reverse the order of worldCities
log('NWO -->', worldCities.reverse());

// Replace the 3rd item in the array of worldCities with "Toronto"
worldCities.splice(2,1,'Toronto');
log('Toronto in place -->', worldCities);

// Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position
worldCities.splice(1,0,'Washington');
log('Washington added -->',worldCities);

// Write a program to join all elements of the result (worldCities) into a string
const worldIsOne = worldCities.join(' + ');
log('world comes together -- >', worldIsOne);

// Write a program to reverse the string: "Hello World".
const strPrmtv = 'Hello World';
const readyForReverse = strPrmtv.split('');
const strReversed = readyForReverse.reverse();
log('string reversed -->', strReversed.join(''));

// Make an array of your siblings' names or your favorite movie characters' names
const movieChar = ['Terminator', 'Alvy Singer'];
log(movieChar);

// Make an array of your parents' names
const someNames = ['Debrah','Jose'];
log(someNames);

// Combine these two arrays
const namesCombo = movieChar.concat(someNames);
log('concatted -->', namesCombo);

// Add you pet's name
namesCombo.push('Kala');
log('pet added -->', namesCombo);

// Reverse the order of the array
namesCombo.reverse();
log('reversed -->', namesCombo);

// Update one of your parents' names
namesCombo.splice(2,1,'Deborah');
log('Debrah to Deborah -->', namesCombo);