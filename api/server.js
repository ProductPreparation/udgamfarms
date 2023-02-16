const express = require('express')
const morgan = require('morgan')
var cors = require('cors')

const db = require('./db')
const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/online-queries', async (req, res) => {
  const online_queries = await db.select().from('online_queries')
  res.json(online_queries)
})

app.post('/online-queries', async (req, res) => {
  // const online_queries = await db('online_queries').insert({...req.body, sys_creation_date:Date.now()}).returning('*')
  const online_queries = await db('online_queries').insert(req.body).returning('*')
  res.json(online_queries)
  console.log(req.body)
})

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
