const accountID=112345
let accountEmail="abhi1234@gmail.com"
var accountpassword="223344"
accountCity="Kanpur"
let accountState;

// accountID=2  //not allowed

console.log(accountID);
accountEmail="htc123@gmail.com"
accountpassword="212121212"
accountCity="Ballore"
/*
Prefer not to use var 
because of the issue in block space and funtional scope
*/

console.table([accountEmail ,accountID, accountpassword, accountCity, accountState]);