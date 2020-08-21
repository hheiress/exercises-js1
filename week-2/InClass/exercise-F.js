function username(name,user){
    if (( name.length >= 5 && name.length <= 10) && (user === "admin" || "manager")){
        return "Username valid";}
return  "Username invalid";}


console.log(username("Diana"));
 