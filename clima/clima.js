const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=16e5832bf1d593536ec16a8e625ef21a`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}