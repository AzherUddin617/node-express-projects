const express = require('express')
const app = express();

// middleware
app.use(express.json());

// routes
const tasks = require('./routes/tasks');

app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

// app.get(/api/v1/tasks) // all tasks
// app.post(/api/v1/tasks) // create task
// app.get(/api/v1/tasks/:id) // get single task
// app.patch(/api/v1/tasks/:id) // update task
// app.delete(/api/v1/tasks/:id) // delete task

const port = 8080;

app.listen(port, console.log(`Server is listening on port http://localhost:${port} ...`))
