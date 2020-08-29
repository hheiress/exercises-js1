const array=[
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];
  
  function filtered(name){
      return typeof name==="string";
  }
  function changed(name){
      return name.toUpperCase()+"!";
      
  }
  
  //function formatName(name) {
    //if (a=name.split("")){
     //  return a[i].toUpperCase();
     // }
//}
  
  const result = array.filter(filtered); 
  const x = result.map(changed);
  //const namesFormatted = array.map(formatName);
  //result.forEach(namesFormatted);
  console.log(x);