 const class1=["David","Katrin","Bob","Lady","Sam"];
 const class2 = class1.concat("Marta","Liza","Kiara","Nadi","Sandy");
 
 const orderedClasses = class2.sort();
console.log(orderedClasses);
 function twoClasses(name){
 if(class2.includes(name)){
  return name + " is at the class with " + class2;
 }
 return name + " is not at the class with " + class2;}
 console.log(twoClasses("Elza"));