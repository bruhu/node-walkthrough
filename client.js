const { version, name } = require("./package.json");

const axios = require("axios");

exports.getTimeData = async (area, city) => {
  const response = await axios(
    `http://worldtimeapi.org/api/timezone/${
    area && city ? area + "/" + city : ""
    }`
  );

  return response.data;
};

//this was on index.js in the other repository, together with require()

const arguments = process.argv.slice(2);

if (arguments.includes("--help")) {
  console.log(`
Thanks for using ${name} 🎉
version: ${version}
You need to provide at least two arguments your area (continent) and a valid city.
Use --options to see available arguments.
  `);
  process.exit();
}

if (arguments.includes("--option")) {
  getTimeData()
    .then(data => {
      return data.reduce((acc, curr) => {
        const [area, city] = curr.split("/");
        acc.push({ area, city });
        return acc;
      }, []);
    })
    .then(data => {
      data.forEach(entry => {
        console.log(entry);
      });
      process.exit();
    });
}

getTimeData(arguments[0], arguments[1]).then(data => {
  switch (arguments[2]) {
    case "--unix":
      return console.log(data["unixtime"]);
    case "--currentWeek":
      return console.log(data["week_number"]);
    case "--dayOfTheYear":
      return console.log(data["day_of_year"]);
    default:
      return console.log(data["utc_datetime"]);
  }
  process.exit();
});