const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];


let yearsFilter=(birthYear)=>{
    const age=2020-birthYear;
    if (age>=17){
    return "Born in "+ birthYear + " can drive";
}
   else{ 
   const diffAge=17-age;
   return "Born in " + birthYear +" can drive in "+ diffAge + " years";
}};
const result = years.map(yearsFilter);
// const result = years.map(yearsFilter);
console.log(result);
  
  
 
