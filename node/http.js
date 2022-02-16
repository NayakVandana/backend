let http =require("http");
let server =http.createServer((req,res)=>{
    res.write("<h1>hello worldd</h1>");
})

server.listen(1234);