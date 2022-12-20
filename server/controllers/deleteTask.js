const todoSchema = require("../models/todoSchema");

exports.deleteTask = (req, res) => {
  const task_id=req.params.id
    todoSchema.todo.findByIdAndDelete(task_id, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Task deleted successfully");
      }
    });
};
