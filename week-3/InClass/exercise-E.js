const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const yearsString=(arr) =>{ 
    // empty array
    const age = [];
    //callback function that return each value
    arr.forEach((year)=>{
    //function that define the real age    
    console.log(`The person is ${2020 - year} y.o`);
    //push all the gotten values to the empty array
    return age.push(`${2020-year}`)
});

return age};

console.log(yearsString(years));
