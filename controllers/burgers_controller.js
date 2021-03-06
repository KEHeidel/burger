var express = require("express");
var connection = require("../config/connection.js");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/insertburger", function(req, res){
    burger.insertOne("burger_name", req.body.burger_name, function(data){
        res.redirect("/");
    });
});

router.post("/update/:id", function(req, res){
    var condition = `id = ${req.params.id}`;
    burger.updateOne({devoured: true}, 
        condition, function(){
            res.redirect("/");
        });
});

module.exports = router;