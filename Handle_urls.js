const http=require('http');
// const server = http.createServer((req, res)=>{
// console.log(req.url);
// var text;
// switch(req.url){
//     case '/':
//         text="This is home page.";
//         break;
//     case '/contact':
//         text="This is contact page."
//         break;

//     case '/view':
//         text="This is view page."
//         break;
//     default:
//         text="Error 404!!";
//         break;
// }
// res.setHeader('Content-Type','text/plain')
// res.write(text);
// res.end();
// })
// server.listen(8000,()=>{
//     console.log("Server is Active.")
// })
//


//Status Code
//Informational responses (100–199)

//Successful responses (200–299)

//Redirects (300–399)

//Client errors (400–499)

//Server errors (500–599

    //Redirects
    const server=http.createServer((req,res)=>{
        if(req.url=='/contact'){
            res.setHeader('Content-Type','text/plain');
            res.write("Hello, Its contact page.")
            res.statusCode=200;
            res.end();
        }
        else{
            res.statusCode=301;
            res.setHeader('Location','/contact')
          
            res.end();
        }
    })
    server.listen(3000,()=>{
        console.log("Server is Listening.")
    })

    //For Package installation Locally
    //npm init --y
    