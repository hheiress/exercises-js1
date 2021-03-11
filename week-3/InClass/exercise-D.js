function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }
  function changeFunction(name){
      let result = name.map((str) => str.toUpperCase());//str. is not defined, it's only used like (x) in a function
         return result.sort();
      }

let result = abracaFunction(changeFunction);
console.log(result);
