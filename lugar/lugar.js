const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === `ZERO_RESULTS`) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);

    }

    let location = resp.data.results[0];
    let cors = location.geometry.location;

    // console.log('Direccion: ', location.formatted_address);
    // console.log('lat', cors.lat);
    // console.log('lng', cors.lng);

    return {
        direccion: location.formatted_address,
        lat: cors.lat,
        lng: cors.lng
    }
}

module.exports = {
    getLugarLatLng
}