const express = require('express')
const app = express()
const cors = require('cors')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.static('./public'))
app.use(express.json())

// const corsOptions = {
//   origin: 'http://127.0.0.1:5500', // Replace with your frontend's origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// }

// app.use(cors(corsOptions))

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/tasks', tasks)
//app.get('/api/v1/tasks', (req, res) => {})
// app.post('/api/v1/tasks', (req, res) => {})
// app.get('/api/vi/tasks/:id', (req, res) => {})
// app.patch('/api/vi/tasks/:id', (req, res) => {})
// app.delete('/api/vi/tasks/:id', (req, res) => {})

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB)
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
