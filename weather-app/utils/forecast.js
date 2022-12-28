const request = require('request');
const key = require('../privatekeys/keys.js').weatherstack_key;
const getWeather = (lat, lon, callback) => {
    const key = 'abc90eb7ea84a845c70c2f09b97f736e';
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${lat},${lon}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect', undefined);
        } else if (response.body.error) {
            callback(response.body.error.info, undefined);
        } else {
            const output = `${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. Feels like ${response.body.current.feelslike} Precip is ${response.body.current.precip * 100}`
            callback(undefined, output);
        }
    })
}

module.exports = getWeather;

