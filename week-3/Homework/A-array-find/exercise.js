/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
//1
function longName(name){
  return name.length > 7 && name.startsWith("A");
}
function findLongNameThatStartsWithA (name){
  return name.find(longName);
}

//2
let findLongNameStartsWithA = (array) => {
  for (i = 0; i < array.length; i++) {
    if (array[i][0] === "A" && array[i].length > 7) {
      return array[i];
    }
  }
};
//3
let findName = el => el.find((name) => name.startsWith('A') && name.length > 7)

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(findLongNameStartsWithA(names))
console.log(longNameThatStartsWithA);
console.log(findName(names))
/* EXPECTED OUTPUT */
// "Alexandra"
