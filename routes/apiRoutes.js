const noteData = require("../db/db.json");
const fs = require("fs")
const path = require("path");
const readPath = path.join(__dirname, "../db/db.json")


module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        fs.readFile(readPath, (error, data) => {
            if (error) {
                throw error;
            }
            res.json(JSON.parse(data))
        })
    })

    app.post("/api/notes", function (req, res) {
        const noteId = Math.random();
        const usersNote = {
            id: noteId,
            title: req.body.title,
            text: req.body.text,
        }
        fs.readFile(readPath, "utf8", (error, data) => {
            if (error) {
                throw error
            }
            const givenData = JSON.parse(data)
            givenData.push(usersNote)
            fs.writeFile(readPath, JSON.stringify(givenData, null, 1), (error) => {
                if (error) {
                    throw error
                }
                res.json(usersNote)
            })
        })
    })

    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        console.log("id: " +  id, typeof id)
        fs.readFile(readPath, (error, data) => {
            if (error) {
                throw error
            }
            // console.log(data)
            const savedData = JSON.parse(data);
            console.log("Saved Data" + JSON.stringify(savedData))
            const savedNotes = savedData.filter(note => parseFloat(id) !== note.id)
            fs.writeFile(readPath, JSON.stringify(savedNotes, null ,1), (error) => {
                if (error) {
                    throw error
                }
                res.send(savedNotes);
            })
        })
    })
}
