const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const yearsString=(arr) =>{ 
    const age = [];
    arr.forEach((year)=>{
    console.log(`The person is ${2020 - year} y.o`);
    return age.push(`${2020-year}`)
});
return age};

console.log(yearsString(years));
