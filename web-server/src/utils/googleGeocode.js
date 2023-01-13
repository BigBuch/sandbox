const geocode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${key}&limit=1`;
    request({ url: geoUrl, json: true }, (error, response) => {
        const { features = [] } = response.body
        if (error) {
            callback('unable to connect', undefined)
        } else if (features.length === 0) {
            callback(response.body.message || 'location not found', undefined);
        } else {
            const { center: [lon, lat], place_name: location } = features[0]
            callback(undefined, { lon, lat, location });
        }
    })
}

function initialize(address) {

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var Lat = results[0].geometry.location.lat();
            var Lng = results[0].geometry.location.lng();


        } else {
            alert("Something got wrong " + status);
        }
    });
}