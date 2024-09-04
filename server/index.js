const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());


// Connect to MongoDB
// mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });
// Define routes and middleware


app.post('/',async (req,res)=>{
   var  username = req.body.username;
    var password = req.body.password;
    if (username ==="Akhlaq" ){
        res.json({data:"You signed in"})

    }
    else{
        res.json("Credentiasl are field")
    }


});


app.post("/register",async(req,res)=>{

    var body = req.body
    var username = body.username
    var password = body.password


    res.json("You registered successfully")
    


})





app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);


});