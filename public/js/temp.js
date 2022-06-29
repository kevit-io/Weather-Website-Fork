console.log('Client side js')


axios.get('http://localhost:2000/weather?address=India').then((response)=>{
    if(!response.data.location){
        console.log('Unable to find location!Please try again')
    }
    else{
        console.log(response.data.location)
        console.log(response.data.forecast)
    }
})

const weatherForm=document.querySelector('form')    
const search = document.querySelector('input')
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()//prevents default behaviour that browser refreshes the page everytime
    const location = search.value
    
    console.log(location)
})




















// }).catch((error)=>{
//     if(error.response){
//         console.log('Unable to connect to weather service')
//     }
//     else if(error.request){
//         console.log('Sorry try again by changing the url')
//     }

//once cdn is used in hbs file axios becomes available to browser so no need to import/require the axios librry