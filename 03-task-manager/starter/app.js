const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 3000
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App 2')
// })

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on PORT ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
//console.log("Task Manager App");
