const request = require("request");
const key = require("../privatekeys/keys.js").weatherstack_key;

const getWeather = (lat, lon, callback) => {
  const key = "abc90eb7ea84a845c70c2f09b97f736e";
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${lat},${lon}`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      const { weather_descriptions, temperature, feelslike, precip } =
        body.current;
      const output = `${
        weather_descriptions[0]
      } It is currently ${temperature} degrees out. Feels like ${feelslike} Precip is ${
        precip * 100
      }`;
      callback(undefined, output);
    }
  });
};

module.exports = getWeather;
