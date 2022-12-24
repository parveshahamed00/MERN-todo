const todo = require("../models/todoSchema");
exports.addTodo=(req,res)=>{
    
    const insertTodo = new todo.todo(req.body);
  insertTodo.save((err, docs) => {
    if (!err) {
      res.json(req.body);
    }
  });
}