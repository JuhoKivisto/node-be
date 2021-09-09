
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static("public"))

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/api/locations",(req, res) => {
  res.send(database)
})

app.get("/api/locations/:id", (req, res) => {
  const id = Number(req.params.id);
  const location = database.find(location => location.id === id)
  res.json(location)
})

app.delete("/api/locations/:id", (req, res) => {
  const id = Number(req.params.id);
  database = database.filter(location => location.id !== id)
  
  res.json(location)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})