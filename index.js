//load external resources - we need relative path so it does not search in node modules
const { showHelp } = require("./messaging");
const { prepareString } = require("./formatting");

//handle input
const args = process.argv.slice(2);

//function should fire if the term --help appears anywhere in the argument list
if (args.includes("--help")) {
  showHelp();
}

//input goes to formatting.js then gets returned back here
let result = prepareString(args[0]);

console.log(result);
