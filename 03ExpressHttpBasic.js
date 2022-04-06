const express=require('express')
const app=express()


//Get data from page
app.get('/',(req,res)=>
{
    res.send('Home Page')

})
//for all situation that did not handled 
app.all('*',(req,res)=>
{
    res.status(404).send('<h1>Page not found</h1>');
    res.status(304).send('Page Displays')
})
//Listner call back function listining from port 5000 
app.listen(5000,()=>
{
    console.log('Server is listining at port 5000')    
})