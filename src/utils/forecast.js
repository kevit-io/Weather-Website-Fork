const axios = require('axios')
const forecast= (lattitude,longitude,clback)=>{
    const url1 = 'http://api.weatherstack.com/current?access_key=535865361198020221e34b51544e1827&query='+encodeURIComponent(lattitude)+','+encodeURIComponent(longitude)+'&units=f'

axios.get(url1).then((response)=>{
    clback(undefined,`It is currently ${response.data.current.temperature} out but it feels like ${response.data.current.feelslike} out`)
}).catch((error)=>{
    if(error.response){
        clback('Unable to connect to weather service',undefined)
            }
            else if(error.request){
            clback('Sorry try again by changing the url',undefined)
            }
})
}
module.exports = forecast

/*destructuring syntax: axios.get(url).then({data}={})=>{...}
note here {} is used to prevent error 'cannot destructure property
of undefined. Instead it is assigned to an empty object.After destructuring
remove resposne from anywhere

*/