const http =require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to home page');
    }
    if(req.url==='/about'){
        res.end('welcome to About page');
    }
   res.end(`<h1>Oops!!</h1> 
   <p>We cant find page</p>
   <a href='/'>back to home</a>
   `)
 
  

})

server.listen(5000);