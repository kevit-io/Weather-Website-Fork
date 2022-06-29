const path = require('path')
//path is a library that makes it easier to deal with paths when we want to point to certain paths

const express = require('express')

console.log(__dirname)//shows directory name
//console.log(__filename)//shows filename

const publicDirPath=path.join(__dirname,'../public')//joins the specified segments into one path

/*../public helps to point to that directory */

const app = express()
//decides what to do when user request for resources. req=incoming request,res= provides methods to send response

app.use(express.static(publicDirPath))



//note the below code for url='' will not get executed as the path is provided to app.use 
app.get('',(req,res)=>{//describes what to do for the mentioned resource
res.send('<h1>Hello</h1>')//msg to show on client machine(browser)
 })

app.get('/help',(req,res)=>{
    res.send('Help page')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1>')//html content
    
})


app.get('/weather',(req,res)=>{
    //res.send('Weather page')
    res.send({
        name:'Jahanvi',
        age:20//sending json
    })
})
 app.listen(3000,()=>{
    console.log('Server started listening')//this msg will never show upon the browser
 })//to start the server to listen. argument ta kes port number upon which to listen
 // another argument is a callback function