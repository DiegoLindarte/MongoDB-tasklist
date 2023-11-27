const express = require('express')
const { connect } = require('mongoose')
const connectDB = require('./db')
const tasksModel = require('./modules/tasks')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tasks', async (req, res) => {
  //return res.send( await tasksModel.find({}) );
    const tasks = await tasksModel.find({});
    res.send({ tasks: tasks });
})

app.delete('/taskD', async (req, res) => {
  //return res.send( await tasksModel.find({}) );
    const taskD = await tasksModel.deleteOne({ nameT: "Ponerme la piyama" });
    res.send({ tasks: taskD });
})

app.post('/taskP', async (req, res) => {
  //return res.send( await tasksModel.find({}) );
    const taskP = new tasksModel({ nameT: "Ponerme la piyama", descriptionT: "Para dormir", completeT: false });
    await taskP.save();
    res.send({ tasks: taskP });
})

app.listen(port, () => {
    connectDB();
  console.log(`app listening on port ${port}`)
})