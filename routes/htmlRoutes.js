const path = require("path");

console.log(__dirname)
module.exports = function(app){
    app.get("/notes" , function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/html/notes.html"))
    });
    app.get("*" , function(req,res){
        res.sendFile(path.join(__dirname, "../assets/html/index.html"))
    });
}