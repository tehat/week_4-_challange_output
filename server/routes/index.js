var express = require("express");
var router = express.Router();
var path = require('path');

//router.route('/data')
//    .get(function(req, res){
//        res.send("Hello");
//    })
//    .post(function(req, res){
//        console.log(req.body.valueInput);
//        res.send({message: "Hello " + req.body.valueInput});
//    });


router.get("/output", function(req, res){
    console.log("hello now!");
    res.send(console.log("server has connected"));

});


router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/input.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;