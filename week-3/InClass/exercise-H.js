const array=["Mike","Sam","Daniel","Katrin","Betty"];

function nameSearch(name,x){
   let result = name.find(
       function (item){
           return item===x;
       }
   ); 
   if (result===x){
       return "Found me";
   }else {
       return "Haven't found me";
   }
   }
 
//function revise (array){
  //   if(array.includes("Diana")){
    //     return "Found me";
    //}return "Haven't found me";
//}
console.log(nameSearch(array,"Sam"));