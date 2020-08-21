/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
function greeting(name, danielsRole){
if (danielsRole === "mentor"){
  return "Hi, I'm " + name  +  " ,I'm a mentor.";
}
else if (danielsRole ==="student"){
 return "Hi, I'm " + name + " ,I'm a student.";
}}

var name = "Daniel";
var danielsRole = "mentor";
console.log(greeting(name,"mentor"));
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
