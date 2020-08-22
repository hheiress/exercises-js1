/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/
function selectDay(array){
  for (let i = 0; i < daysOfWeek.length;  i++) { 
    if (array[i].startsWith ('T'))  {
  console.log("Strings that start with letter 'T' "+ array[i]);
}}
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
selectDay(daysOfWeek);