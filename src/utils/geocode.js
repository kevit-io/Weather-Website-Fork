const axios = require('axios')
async function geocode(address,clback){
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamFoYW52aTI4MDkiLCJhIjoiY2w0dG5mdGhsMGoydzNrcXB1eGc1djd4aiJ9.70tWc7LOoROKB9hJOK40Jw&limit=1'
try{
    const response = await axios.get(url)
    const data = response.data
    if(data.features.length==0){
             //console.log('Change the url and try again')
             return clback('Change the url and try again',undefined)
        }
        clback(undefined,{
            latitude : response.data.features[0].center[1],
            longitude:response.data.features[0].center[0],
            location: response.data.features[0].place_name
        
        })
}
catch(error){
    clback('Unable to connect to location service',undefined)
}

}

module.exports = geocode