const yargs = require("yargs");

const geocode = require('./utils/geocode.js');
const getWeather = require('./utils/forecast.js')

yargs.command({
    command: "forecast",
    describe: "get forecast",
    builder: {
        place: {
            describe: "location",
            demandOption: true,
            type: "string",
        }
    },
    handler: (argv) => {
        geocode(argv.place, (error, { lat, lon, location } = {}) => {
            if (error) {
                return console.log(error);
            }
            getWeather(lat, lon, (error, forecastData) => {
                if (error) {
                    console.log('Error', error);
                }
                console.log(location);
                console.log(forecastData);
            })
        })
    }
});

yargs.parse();





