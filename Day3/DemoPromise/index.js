// let FavNumber=[21,36,96,98,58,54,21,23,42,15,685,12,58,1254,69,5]

// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         if(true){resolve(FavNumber)}
//         else{reject("rejects")}
//     }, 4000);
// })
// // permise are resolved

// promise
// .then(function(res){
//     console.log("Resolve",res);
//     return res.filter(function(val){
//         return val >50
//     })
// })
// .then(function(res){
//     console.log("Resolve",res)
//     return res.reduce(function(int ,val){
//         return int+val;
//     })
// })
// .then(function(res){
//     console.log("Resolve",res)
// })
// .catch(function(err){
//     console.log("Rejected",err)
// })
// .finally(function(){
//     console.log("Promise are now setteled")
// })

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Promise ONe Is resolved");
    } else {
      reject("Peomise ONe is Rejected");
    }
  }, 6000);
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Promise Two Is resolved");
    } else {
      reject("Peomise Two is Rejected");
    }
  }, 9000);
});
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Promise Three Is resolved");
    } else {
      reject("Peomise Three is Rejected");
    }
  }, 7000);
});
var promise4 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (true) {
        resolve("Promise Foure Is resolved");
      } else {
        reject("Peomise Three is Rejected");
      }
    }, 4000);
  });
};
// promise1.then().catch().finally()
// promise2.then().catch().finally()
// promise3.then().catch().finally()

// Promise.all([promise1,promise2,promise3,promise4()])
// .then(res => console.log(res))
// .catch(err => console.log(err))
// .finally("all setteled");

//race will consider resolve and reject
Promise.race([promise1, promise2, promise3, promise4()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally("all setteled");

Promise.allSettled([promise1, promise2, promise3, promise4()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally("all setteled");
