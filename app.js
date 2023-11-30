const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
