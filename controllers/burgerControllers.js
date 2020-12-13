const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


//Get method
router.get("/", function(req, res){
    burger.select(function(data){
        const hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});


//Post method
router.post("/api/burgers", function(req,res){
    //Need to identify in front end script
    burger.insert('burgerName', [req.body.burgerName], result => {
        console.log('Updated');
        res.redirect("/");
    });
});

//Update method
router.put("/api/burgers/:id", function(req,res){
    const condition = 'id = ' + req.params.id;
    //test
    console.log("condition", condition);

    burger.update({ devoured: true }, condition, 
        function(result){
            if (result.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;