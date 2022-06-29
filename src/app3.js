const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()
const publicDirPath=path.join(__dirname,'../public')//joins the specified segments into one path
const temp = path.join(__dirname,'../templates/views')//setting path for views
const partialPath =path.join(__dirname,'../templates/partials') //setting path for partials

/*../public helps to point to that directory */

app.set('view engine', 'hbs')//to set handlebars in express(key,value pair)
app.set('views',temp)//setting views folder to templates folder
hbs.registerPartials(partialPath)//configuring the partial path using hbs

//decides what to do when user request for resources. req=incoming request,res= provides methods to send response

app.use(express.static(publicDirPath))

app.get('',(req,res)=>{//allows us to render views
    res.render('index',{        //first arg=name of the view to be rendered and scond arg is the obj to be rendered
        title:'Weather App',
        name : 'Jahanvi Khakhar'
    })
})
app.get('/about',(req,res)=>{//setting up routing for about page
    res.render('about',{
        title: 'About Me',
        name: 'Jahanvi K'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Page',
        name: 'Jahanvi'
    })
})
app.get('/weather',(req,res)=>{//setting up route for weather page
    if(!req.query.address){//if address is not provided then it will print error message
        return res.send({
            error: 'You must provide a query string for address'
        })
    }
else{
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send(error)
          }
          forecast(latitude,longitude, (error, fdata) => {
            if(error){
              return res.send(error)
            }
            res.send({
                forecast : fdata,
                location: location,
                address: req.query.address
            })
            //   console.log(location)
            //   console.log(fdata)
            })
    })
}

    
})

app.get('/products',(req,res)=>{
    if(!req.query.search){//req object method query
        return res.send({
            error: 'You must provide a query string'
        })//note here return will direclty return the result and will not execute further
    }
    res.send({
        products : []
    })
})
// app.get('/help/*',(req,res)=>{//will check if /help/test or any other such page routing exists or not and if not then shows this error msg
//     res.send('Help article not found')
// })
// app.get('*',(req,res)=>{//* wild card character to check that this(given) route is that route which not among the above mentioned routes
//     res.send('My 404 page')
// })
app.get('/help/*',(req,res)=>{//will check if /help/test or any other such page routing exists or not and if not then shows this error msg
    res.render('404',{
            title: '404',
            name: 'JK',
            errorMsg : 'Help article not found'
    })
})

// setting error page using render adn handlebars(dynamically)
app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'JK',
        errorMsg : 'Page not found'
    })
})


app.listen(2000,()=>{
    console.log('Server started listening')
})

/* initially it was views folder but to change the name u need to
give a different path using payh.join and then set it to views(default folder)
using app.set
*/