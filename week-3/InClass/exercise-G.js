const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let year = (one)=>2020-one > 17;

function birthFilter(year){
    return 2020-year >17;
    }
const result = "These are the birth years of people who can drive: "+ birthYears.filter(year);   
console.log(result);