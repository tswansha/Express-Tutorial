const express=require('express')
const app=express()

//Get data from data.js
const {products} =require('./data')
const {people}=require('./data') 

app.get('/',(req,res)=>
{
    res.json(products)
})

//Listner call back function listining from port 5000 
app.listen(5000,()=>
{
    console.log('Server is listining at port 5000')    
})