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
        geocode(argv.place, (error, data) => {
            if (error) {
                return console.log(error);
            }
            getWeather(data.lat, data.lon, (error, forecastData) => {
                if (error) {
                    console.log('Error', error);
                }
                console.log(data.location);
                console.log(forecastData);
            })
        })
    }
});

yargs.parse();





