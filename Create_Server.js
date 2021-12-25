const http=require('http')
//Create Server
// const server=http.createServer((req,res)=>{
    //request method
//     console.log(`A request recived with\n URL: ${req.url}\nMethod:${req.method}`)
// })


//install it by 
//npm install -g nodemon
//Use it to runserver instead of "node filename"
// nodemon filename   //(best) //Must save file before & during server running state to make changes in files.

//response methods
const server=http.createServer((req,res)=>{
    //console.log(`A request recived with\n URL: ${req.url}\nMethod:${req.method}`)
    res.setHeader('Content-Type','text/plain');
    res.write('Hello Mr. X ,You requested for '+req.url);
    res.end()
})


const port=300
//Active the Server
server.listen(port,()=>{
    console.log(`Server is Active at port ${port} `)
})