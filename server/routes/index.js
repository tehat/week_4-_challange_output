var express = require("express");
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));

router.post("/data", function (req, res) {
    console.log(req);
    res.send("");

});
router.get("/*", function(req, res){
    var file = req.params[0] || "/assets/views/input.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;