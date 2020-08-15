function message (name, result){
    return "My name is " + name +" and I am "+ result +" years old";
}
function AgeinYears(ageyear, year){
return year-ageyear;
}
const result = AgeinYears(1977,2020);
const text = message("Augustin",result);

console.log(text);