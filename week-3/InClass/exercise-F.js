const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
function mass(year){
    return 2020-year;
}
let gaga=years.map(mass);
function carap(age) {
  return age-17; 
}
let diff=gaga.map(carap);
function yearsString(year) {
    if (diff>=0){
	return "Born in"+ year + "can drive";
} else (diff <0)
    return "Born in " + year +" can drive in " + diff + " years";
};
  
console.log(yearsString(years));
  
  
 
