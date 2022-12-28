const request = require('request');
const key = require('../privatekeys/keys.js').mapbox_key;

const geocode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${key}&limit=1`;
    request({ url: geoUrl, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect', undefined)
        } else if (!response.body.features || response.body.features.length === 0) {
            callback(response.body.message || 'location not found', undefined);
        } else {
            callback(undefined, {
                lon: response.body.features[0].center[0],
                lat: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;