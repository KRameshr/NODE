// Events listgeners

var EventEmiter = require("node:events").EventEmitter;
var ee = new EventEmiter();
function intellipaatEventHandler() {
  console.log("Intellipaat Event Happened");
}
let result = ee.addListener("intellipaatEvent", intellipaatEventHandler);
ee.emit("Exit form Event");
console.log(result);
