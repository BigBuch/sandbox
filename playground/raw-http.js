const https = require('https');
const key = require('../weather-app/privatekeys/keys.js').weatherstack_key;
const url = `https://api.weatherstack.com/current?access_key=${key}&query=40,-75`;

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();

    });

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);

    });
});

request.on('error', (error) => {
    console.log('ERR', error);
})

request.end();