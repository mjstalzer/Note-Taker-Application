const noteData = require("../db/db.json");
const fs = require("fs")
const path = require("path");

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "uft8", (error, data) => {
            if (error) {
                throw error;
            }
            res.json(JSON.parse(data))
        })
    })
    app.post("/api/notes", function (req, res) {
        const note = req.body;
        fs.readFile(data, (error, data) => {
            if (error) {
                throw error;
            }
            const noteFile = JSON.parse(data)
            noteFile.push(note)
            fs.writeFile(noteData, JSON.stringify(noteFile), error => {
                if (error) {
                    throw error;
                }
                console.log("Successfuly written to db!!!")
            })
            res.json(noteFile)
        })
    })
    app.delete("/api/notes/:id", (req, res) => {
        const noteID = req.params.id;
        fs.readFile(path.join(__dirname, + "../db/db.json"), "uft8", (error, data) => {
            const data1 = JSON.parse(data)
            const newNotes = data1.filter(note => noteID !== note.id)
            if (error) {
                throw error
            }
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotes), (error) => {
                if (error) {
                    throw error
                }
                res.send(newNotes);
            })
        })
    })
}
