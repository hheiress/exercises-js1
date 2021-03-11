const array=["Mike","Sam","Daniel","Katrin","Betty"];

function nameSearch(name,x){
   let result = name.find((item)=>item===x); 
   
   if (result===x){
       return "Found me";
   }else {
       return "Haven't found me";
   }
   }
 
function revise (array, name){
    if(array.includes(name)){
        return "Found me";
    }return "Haven't found me";
}
console.log(nameSearch(array,"Sam"));