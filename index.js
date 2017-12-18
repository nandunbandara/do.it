const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 7001;

mongoose.connect('mongodb://root:pass123@ds161026.mlab.com:61026/alexa-api-doit', function(){
  console.log('connected to database!');
}, function(err){
  throw new Error(err);
})

app
  .post('/api/todos', addToDo)
  .listen(PORT, function(err){
    if(err){
      console.log('Can not listen on PORT: ', PORT);
      return;
    }

    console.log('Listening on PORT: ', PORT);
  })

let todoSchema = mongoose.Schema({
  user: { type:String },
  todo: { type:String }
})

let ToDo = mongoose.model('Todo', todoSchema);

function addToDo(req,res){
      console.log(req.body);
      res.status(200).json({ message:"recieved"});
}
