const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = require('./queries');


app.get('/api/online-queries', db.getAllQueries)

app.post('/api/online-queries', db.createOnlineQuery)

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
