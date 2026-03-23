const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.static("public"))

const filePath = path.join(__dirname, "guests.json")

app.post("/confirm", (req, res) => {

const { name, companions } = req.body

if (!name) {
return res.status(400).json({ error: "Nome obrigatório" })
}

let guests = []

if (fs.existsSync(filePath)) {
guests = JSON.parse(fs.readFileSync(filePath))
}

guests.push({
name,
companions
})

fs.writeFileSync(filePath, JSON.stringify(guests, null, 2))

res.json({ success: true })

})

app.get("/guests", (req, res) => {

let guests = []

if (fs.existsSync(filePath)) {
guests = JSON.parse(fs.readFileSync(filePath))
}

res.json(guests)

})

app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000")
})