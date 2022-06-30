const axios = require('axios')
async function forecast(lattitude,longitude,clback){
    const url1 = 'http://api.weatherstack.com/current?access_key=535865361198020221e34b51544e1827&query='+encodeURIComponent(lattitude)+','+encodeURIComponent(longitude)+'&units=f'
try{
    const response = await axios.get(url1)
    const data = response.data
    if(data.error){
        clback('Unable to find location',undefined)
    }
    else{
        clback(undefined,`It is currently ${response.data.current.temperature} out but it feels like ${response.data.current.feelslike} out.The humidity is ${response.data.current.humidity}`)
    }
  

}
catch(error){
    clback('Unable to connect to weather service',undefined)
}
}
module.exports = forecast

/*destructuring syntax: axios.get(url).then({data}={})=>{...}
note here {} is used to prevent error 'cannot destructure property
of undefined. Instead it is assigned to an empty object.After destructuring
remove resposne from anywhere

*/