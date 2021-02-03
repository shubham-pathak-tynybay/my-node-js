const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const route = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('./model');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/practice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.get('/get-users-list', async (req, res) => {
    try {
        let list = await UsersModel.find({});
        console.log("list",list)
        res.status(200).json({ msg: "users list", data: list });
    } catch (err) {
        res.status(500).json({ msg: "Internal server erro", err: err });
    }

})
app.get('/get-user/:email', async (req, res) => {
    try {
        let list = await UsersModel.find({email:req.params.email});
        res.status(200).json({ msg: "users list", data: list });
    } catch (err) {
        res.status(500).json({ msg: "Internal server erro", err: err });
    }

})
app.post('/add-user', (req, res) => {
    let body = req.body;
    UsersModel.create(body, function (err, data) {
        if (err) {
            res.status(500).json({ msg: "Internal server erro", err: err });

        } else {
            res.status(200).json({ msg: "User created successfully", data: data });
        }
    })
})
app.put('/update-user', async (req, res) => {
    let body = req.body;
    try{
        let updatedDoc=await UsersModel.updateOne({_id:body._id},{
            $set:{
                email:body.email,
                name:body.name,
                phone:body.phone
            }        
        })
        res.status(200).json({ msg: "User updated successfully", data: updatedDoc });

    }catch(err){
        res.status(500).json({ msg: "Internal server erro", err: err });

    }
})
app.use('/', (req, res) => {
    res.send("welcome to default route");
})
var usersList = [{
    name: "Naresh",
    email: "naresh@gmail.com"
},
{
    name: "Teja",
    email: "teja@gmail.com"
},
{
    name: "Shubam",
    email: "Shubam@gmail.com"
}];



app.listen(3000, (err, server) => {
    if (err) {
        console.log("error", err);
    } else {
        console.log("server started on port", 3000);
    }
})