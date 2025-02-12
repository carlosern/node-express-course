const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = process.env.PORT || 3000
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlresMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager App 2')
// })

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlresMiddleware)

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
