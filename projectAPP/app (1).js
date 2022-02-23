let express = require("express");
let app = express();
const mongo = require("mongodb");
let mongoClient = mongo.MongoClient;
const dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 1234;

let mongoUrl = "mongodb://localhost:27017"; 
let db;

app.get("/",(req,res)=>{
    res.send("<h1>Hello From Home Page</h1>");
})

app.get("/restro/:state",(req,res)=>{
    let stateId = Number(req.params.state);
    db.collection("zomato").find({state_id : stateId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})


mongoClient.connect(mongoUrl,(err,connection)=>{
    if(err) console.log("Error While Connecting");
    db = connection.db("zomato");
    app.listen(port,()=>{
        console.log(`Server start at ${port}`);
    });
})

