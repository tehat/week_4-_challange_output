var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//CHECK BODYPARSER IN CORRECT AREAS

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));

mongoose.connect('mongodb://localhost/groupwk4challenge');

mongoose.model('Person', new Schema ({
    "name": String,
    //"lastName": String,
    "salary": String,
    "years":String
},
    {collection:'employees'}));

var Person = mongoose.model('Person');


router.get("/output", function(req, res){
    Person.find({}, function(err,data){
        if (err) {
            console.log("Error : ", err)
        }
        console.log(data);
        res.send(data);
    })
});

router.delete('/output', function(req,res){
    console.log(req.body.id);

    Person.findByIdAndRemove({"_id" : req.body.id}, function(err, data){
        if(err) console.log(err);
        res.send(data);
    });
});

router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});






module.exports = router;