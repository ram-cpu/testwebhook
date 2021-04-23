const express = require('express')
let bodyParser = require('body-parser')
const app = express()
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}))


app.get('/', (req, res) => {
    console.log("\n-----------------------------------")
    console.log("Query:", JSON.stringify(req.query), "\n", "path=", req.originalUrl, "\nip=", req.ip)
    console.log("-----------------------------------")
    res.send(JSON.stringify(req.query))
})

app.get('/test-webhook', (req, res) => {
    console.log("\n-----------------------------------")
    console.log("Query:", JSON.stringify(req.query))
    console.log("-----------------------------------")
    res.send("OK")
})

app.post('/test-webhook', (req, res) => {
    console.log("\n-----------------------------------")
    console.log("Query:", JSON.stringify(req.query))
    console.log("Body:", JSON.stringify(req.body))
    console.log("-----------------------------------")
    res.send("OK")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})