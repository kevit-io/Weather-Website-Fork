const axios = require('axios')
const geocode = (address,clback)=>{
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamFoYW52aTI4MDkiLCJhIjoiY2w0dG5mdGhsMGoydzNrcXB1eGc1djd4aiJ9.70tWc7LOoROKB9hJOK40Jw&limit=1'
axios.get(url).then((response)=>{
    // if(response.data.features.length==0){
    //      //console.log('Change the url and try again')
    //      clback('Change the url and try again',undefined)
    // }
    
clback(undefined,{
    latitude : response.data.features[0].center[1],
    longitude:response.data.features[0].center[0],
    location: response.data.features[0].place_name

})
    
   
    
}).catch((error)=>{
    if(error.response){
clback('Unable to connect to location service',undefined)
    }
    else if(error.request){
    clback('Sorry try again by changing the url',undefined)
    }
    else{
        clback('Bad request',undefined)
    }
   
})
}

module.exports = geocode