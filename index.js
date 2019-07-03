// Load external resources
const { prepareString } = require("./formatting");
const { showHelp } = require("./messaging");
const { getTimeData } = require("./client");

// Handle input
let area = " ";
let city = " ";
const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
}

// input goes to formatting.js then gets returned back here
result = prepareString(args[0]);

// just testing

console.log(prepareString("kuala  lumpur"));
console.log(prepareString("  puerto rico"));
console.log(prepareString(" tokyo"));

console.log(result);
