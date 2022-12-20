const todoSchema = require("../models/todoSchema");
exports.modifyTask = (req, res) => {
  const task_id = req.params.id;

  todoSchema.todo.findByIdAndUpdate(
    task_id,
    { title: req.body.title },
{new: true},// to return updated document
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs); 
      }
    }
  );
};
