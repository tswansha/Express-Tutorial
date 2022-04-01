//import http modules 
const http=require('http')
//import fs module to read files 
const {readFileSync}=require('fs')

//Get the files 
const homePage=readFileSync('./navbar-app/index.html')
const homeStyle=readFileSync('./navbar-app/styles.css')
const homeImage=readFileSync('./navbar-app/logo.svg')
const homeLogic=readFileSync('./navbar-app/browser-app.js')



//create http server 
const server=http.createServer((req,res)=>
{
    //Setting up pages for different url
    const url=req.url
    console.log(url)
    if(url=='/')
    {
    //send the response header to request with 3 digit status code 
    //and content of the page is either text or html
    res.writeHead(200,{'content':'text/html'})
    //
    res.write(homePage)
    //display message when user access the server 
    console.log('User access the html ')
    //res.end says the communication is over 
    res.end('Home Page')
    }

    else if(url=='/styles.css')
    {
    //send the response header to request with 3 digit status code 
    //and content of the page is css
    res.writeHead(200,{'content':'text/css'})
    //display message when user access the css
    console.log('User access css')
    //
    res.write(homeStyle)
    //
    res.end()
    }

    else if(url=='/logo.svg')
    {
    //send the response header to request with 3 digit status code 
    //and content of the page is image 
    res.writeHead(200,{'content':'Image/svg+xml'})
    //display message when user access timage
    console.log('User access Logo')
    //
    res.write(homeImage)
    //
    res.end()
    }
 
    
    else if(url=='/browser-app.js')
    {
    //send the response header to request with 3 digit status code 
    //and content of the page is either text or html
    res.writeHead(200,{'content':'text/javascript'})
    //display message when user access the js
    console.log('User access Java Script')
    //
    res.write(homeLogic)
    //
    res.end()
    }   

    else if (url=='/About')
    {
        res.writeHead(200,{'content':'text/html'})
        //Write about page 
        res.write('<h1>About Page</h1>')
        //display message when user access the server 
        console.log('User hit the server ')
        //res.end says the communication is over 
        res.end('Home Page')
    }

    else
    {
        res.writeHead(404,{'content':'text/html'})
        //Write about page 
        res.write('<h1>Oops wrong address</h1>')
        //display message when user access the server 
        console.log('User hit the server ')
        //res.end says the communication is over 
        res.end('Home Page')
    }

})
//server listining on port 5000
server.listen(5000)