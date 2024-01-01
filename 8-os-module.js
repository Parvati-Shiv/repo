const os = require('os');
// Info about current user

const user =os.userInfo();
console.log(user);
// Method Return system upptime in seconds

console.log(`the system uptime is ${os.uptime() }seconds`)

const currentos= {
    name:os.type(),
    relese:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(currentos)