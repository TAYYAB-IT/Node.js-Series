 const file=require('fs')

 //Folder creation
// if(!file.existsSync('./folder')){
//     file.mkdir("./folder",(err,data)=>{
//         if(err){console.log(err)}
//         else{console.log("Folder created!")}})
// }
// else{
//     console.log("Folder already exist.")
// }

//Folder Deletion
// if(file.existsSync("./folder")){
// file.rmdir("./folder",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log("Folder Deleted.")
//     }
// })
// }
// else{
//     console.log("Folder already Deleted.")
// }

//File crreation and write something First time
// if(!file.existsSync("./folder/data.txt")){
//     data="HEllO Mr.X";
//     file.writeFile("./folder/data.txt",data,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("File created with nane data.txt//First time")
//         }
//     })
// }
// else{
//     console.log("File already exist");
// }
//Appending if file exist
// if(file.existsSync("./folder/data.txt")){
//     data="HEllO Mr.Y appended";

//     //For appending must use "\r\n" combine.
//     file.appendFile("./folder/data.txt",data+"\r\n",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("New Text appended.")
//         }
//     })
// }
// else{
//     console.log("File not  exist");
// }

//readfile
// if(file.existsSync("./folder/data.txt")){
//     file.readFile("./folder/data.txt",(err,data)=>{
//         if(err){console.log(err)}
//         else{console.log(data.toString())} //Must convert fetching data to string
//     })
// }
// else{console.log("File not exist.")}

//Delete a file.
// if(file.existsSync("./folder/data.txt")){
//     file.unlink("./folder/data.txt",(err)=>{
//         if(err){console.log(err)}
//         else{console.log("File Deleted.")}
//     })
// }
// else{console.log("File not exist.")}

//Crate JavaScript file;
// file.writeFile("./folder/da.js","Helo",(err)=>{
//     if(err){console.log(err)}
// })

//Read JavaScript File
// file.readFile("./User.js",(err,data)=>{
//     if(err){console.log(err)}
//     else{console.log(data.toString())}
// })

