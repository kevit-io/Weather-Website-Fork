//console.log('Client side JS')
const weatherForm=document.querySelector('form')    
const search = document.querySelector('input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
//p1.textContent='XYZ' will print the msg xyz on client browser

weatherForm.addEventListener('submit', async function(event){
    event.preventDefault()//prevents default behaviour that browser refreshes the page everytime
    const location = search.value
    p1.textContent = 'Loading...'
    p2.textContent =''
    try{
        //checks whether the client is online or offline.
        const response = await axios.get(`http://localhost:2000/weather?address=${location}`)
        const data = response.data
        if(data.error){
            p1.textContent =data.error
            //console.log('Unable to find location!Please try aga
        }
        else{
            p1.textContent=data.location
            p2.textContent=data.forecast                
            // console.log(response.data.location)
            // console.log(response.data.forecast)   
        }
        }
        catch(error){
            p1.textContent='You are offline!Unable to connect to service'
        }
    })
   
 
        
    //console.log(location)
