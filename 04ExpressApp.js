const express=require('express')
const path=require('path')
const app=express()

//Add additional resources required to run index.html to public folder 
//and set up as serv static
app.use(express.static('./Public'))

//Send response file to the browser 
app.get('/',(req,res)=>
{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>
{

})
//Listner call back function listining from port 5000 
app.listen(5000,()=>
{
    console.log('Server is listining at port 5000')    
})