//import http modules 
const http=require('http')
//create http server 
const server=http.createServer((req,res)=>
{
    //Setting up pages for different url
    const url=req.url
    if(url=='/')
    {
    //send the response header to request with 3 digit status code 
    //and content of the page is either text or html
    res.writeHead(200,{'content':'text/html'})
    //
    res.write('<h1>Home page</h1>')
    //display message when user access the server 
    console.log('User hit the server ')
    //res.end says the communication is over 
    res.end('Home Page')
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