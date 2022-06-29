//console.log('Client side JS')
const weatherForm=document.querySelector('form')    
const search = document.querySelector('input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
//p1.textContent='XYZ' will print the msg xyz on client browser
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()//prevents default behaviour that browser refreshes the page everytime
    const location = search.value
    p1.textContent = 'Loading...'
    p2.textContent =''
    if(location==''){//if no address provided then will print following
        p1.textContent ='Please provide an address' 
        //console.log('Please provide an address')
    }
    else{
        if(navigator.onLine){//checks whether the client is online or offline.
            axios.get(`http://localhost:2000/weather?address=${location}`).then((response)=>{
                if(!response.data.location){
                    p1.textContent ='Unable to find location!Please try again'
                    //console.log('Unable to find location!Please try again')
                }
                else{
                    p1.textContent=response.data.location
                    p2.textContent=response.data.forecast                
                    // console.log(response.data.location)
                    // console.log(response.data.forecast)
                }
            })
        }
        else{
            p1.textContent='You are offline!Unable to connect to service'
        }
        
    }


    //console.log(location)
})
