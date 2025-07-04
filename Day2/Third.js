// PROCESS

const user = process.argv[2];
const company = process.argv[3];

console.log(user,'is fron',company);
console.log(process.pid)

setTimeout(function (){
    console.log("time done")
    },10000)
   console.log('task Done')