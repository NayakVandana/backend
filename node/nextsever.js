let http =require("http");
let server =http.createServer((req,res)=>{
    res.write("<h1>hello world</h1>");
})

server.listen(4567);