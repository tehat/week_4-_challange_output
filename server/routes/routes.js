var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//CHECK BODYPARSER IN CORRECT AREAS

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));

mongoose.connect('mongodb://localhost/dummy');

mongoose.model('Person', new Schema ({
    "firstName": String,
    "lastName": String,
    "salary": String,
    "yearsOfService":String
},
    {collection:'dummy'}));

var Person = mongoose.model('Person');


router.get("/output", function(req, res){
    Person.find({}, function(err,data){
        if (err) {
            console.log("Error : ", err)
        }
        res.send(data);
    })
});


router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;