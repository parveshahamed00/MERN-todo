const todo = require("../models/todoSchema");
exports.addTodo=(req,res)=>{
    var options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    var today = new Date();
    today = today.toLocaleDateString("en-IN", options); // formating date
    const insertTodo = new todo.todo(req.body);
  insertTodo.save((err, docs) => {
    if (!err) {
      res.json(req.body);
    }
  });
}