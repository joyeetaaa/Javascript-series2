const accountId = 144553
let accountEmail = "joyee@google.com"
var accountPasssword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2// not allowed

accountEmail = "jn@ns.com"
accountPassword = "2121212"
accountCity = "mumbai"

console.log(accountId);
/*
prefer not to use var to avoid block and functional scope, 
use let
*/

console.table([accountId,accountEmail,accountPasssword,accountCity,accountState])