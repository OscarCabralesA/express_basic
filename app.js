const express = require('express')
const app = express()


// initial path in localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// returning simple text
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

// returns an object 
// http://localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Mauri", msg: "Helloo"}
    res.send(explorer)
})

// to receive params from url 
// http://localhost:3000/explorers/mauri
// req.params = {"explorerName":"mauri"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})


module.exports = app