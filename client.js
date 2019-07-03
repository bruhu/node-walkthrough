const axios = require("axios");

// const area = process.argv[2];
// const city = process.argv[3];
// const url = ;

exports.getTimeData = (area, city) =>
  axios
    .get(`http://worldtimeapi.org/api/timezone/${area}/${city}`)
    .then(response => console.log(response.data.utc_datetime));
