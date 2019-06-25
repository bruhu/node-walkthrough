//load external resources - we need relative path so it does not search in node modules
const { showHelp } = require("./messaging");

//handle input
const args = process.argv.slice(2);

//function should fire if the term --help appears anywhere in the argument list
if (args.includes("--help")) {
  showHelp();
}

console.log(args);
