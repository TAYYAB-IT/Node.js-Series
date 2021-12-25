const fs=require('fs')
const read_Stream=fs.ReadStream("./folder/data.txt")
const write_Stream=fs.WriteStream("./folder/data_copy.txt")
// read_Stream.on('data',data=>{
//     console.log("\n\nStarted Chunk\n\n")
//     console.log(data.toString());
//     write_Stream.write("\n###Chunk Started#####\n\n");
//     write_Stream.write(data.toString());
// })

//Aternative way to write file data to other file with stream.
read_Stream.pipe(write_Stream)
