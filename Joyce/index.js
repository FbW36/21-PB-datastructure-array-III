// 1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log("1. euroCities==>", euroCities);
const city = euroCities[1];
console.log("city==>", city);

// 2
euroCities.splice(0, 1, "Berlin");
console.log("2. euroCities==>", euroCities);

// 3
console.log("3. euroCities length==>", euroCities.length);

// 4
euroCities.pop();
console.log("4. euroCities==>", euroCities);

// 5
euroCities.push("Budapest");
console.log("5. euroCities==>", euroCities);

// 6
euroCities.splice(1, 2);
console.log("6. euroCities==>", euroCities);

// 7
const asianCities = ["Tokyo", "Beijin", "Seoul", "Jakarta", "Shanghai"];
console.log("7. asianCities ==>", asianCities);

// 8
const asianCities2 = asianCities.slice(1, 4);
console.log("8. asianCities2 ==>", asianCities2);

// 9
const worldCities = euroCities.concat(asianCities);
console.log("9. worldCities ==>", worldCities);

// 10
worldCities.reverse();
console.log("10. worldCities ==>", worldCities);

// 11
worldCities.splice(2, 1, "Toronto");
console.log("11. worldCities ==>", worldCities);

// 12
worldCities.splice(1, 0, "Washington");
console.log("12. worldCities ==>", worldCities);

// 13
const worldCities1 = worldCities.toString();
const worldCities2 = worldCities.join("+");
const strWorldCities = `${worldCities1}  ${worldCities2}`;
console.log("13. strWorldCities ==>", strWorldCities);

const string = "Hello World";
const strArr = string.split(" ");
const arrRev = strArr.reverse();
const arrToStr = arrRev.join(" ");
console.log("Reverse the string: Hello World==>", arrToStr);

const favMovies = [
  "Die Hard",
  "The Greatest Showman",
  "Princess Sisi",
  "Home by Christmas",
];
console.log("1. My favoratite Movies ==>", favMovies);

const names = ["Emily", "Darren"];
console.log("2. Names==>", names);

const arr = favMovies.concat(names);
console.log("3. Combine these two arrays==>", arr);

const arrAdd = arr.concat("Ufe", "Ega");
console.log("4. Add pets' names==>", arrAdd);

arrAdd.reverse();
console.log("5. Reverse the order of the array==>", arrAdd);

const oneName = arrAdd.slice(
  arrAdd.indexOf("Darren"),
  arrAdd.indexOf("Darren") + 1
);
console.log("6. Access one of your parents' names==>", oneName);

arrAdd.splice(arrAdd.indexOf("Emily"), 1, "Ruby");
console.log("7. Update one of names==>", arrAdd);
