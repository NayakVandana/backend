//create server using express
let express =require("express");
let app = express();
let port =1234;


//CRUD --create Read Update delete

//get  -Read
//post -Create
//put  -Update
//delete -Delete


//    "/" - default route


app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>contact page</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1>about page</h1>");
})


app.listen(port,()=>{
    console.log(`server start at port ${port}`);
});

//or  app.listen(port);
