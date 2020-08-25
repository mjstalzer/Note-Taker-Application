const data = require("../db/db.json");
const fs = require("fs")
const path = require("path");

module.exports = function(app) {
    app.get('/api/notes' , function(req,res) {
        res.json();
    } )
}