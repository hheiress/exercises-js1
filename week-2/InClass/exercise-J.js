function secondMatchesAmy(array) {
  if (array[2] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched!";
}
let names = ["Ben", "David", "Amy"];
console.log(secondMatchesAmy(names));