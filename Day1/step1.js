var os = require("os");
console.log("OS Architecture",os.arch())
console.log("OS Cpus",os.cpus().length);
console.log("OS cpus",os.cpus()[0]);
console.log("OS totalmen",((os.totalmem()/1024)/1024)/1024);
console.log("OS freemen",((os.freemem()/1024)/1024)/1024);
console.log("OS UseName",os.userInfo().username)





