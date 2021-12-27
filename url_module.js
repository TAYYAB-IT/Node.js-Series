const http=require('http')
const url=require('url')
http.createServer((req,res)=>{
        console.log(req.url)
       // var q=url.parse(req.url,true);
       // console.log(q.host); //returns 'localhost:8080'
       // console.log(q.pathname); //returns '/url name'
        //console.log(q.search); //returns '?name="Tayyab"&year=2001'
       // qdata=q.query;
       // console.log(qdata.name)
       // console.log(qdata.year)
res.end()
    
}).listen(8000,()=>{
    console.log("Server is active!")
})