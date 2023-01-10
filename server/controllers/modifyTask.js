const todoSchema = require("../models/todoSchema");
exports.modifyTask =  (req, res) => {
  const todo_id = req.params.todo_id;
  const task_id = req.params.task_id;
// console.log(todo_title,task_title);
  // const task_id = req.params.task_id;
  // console.log(todo_id,task_id);
  // const task_id=todo_id.
  // todoSchema.todo.findByIdAndUpdate(
  //   todo_id,
  //   { $set:{} },
  //   { new: true }, // to return updated document
  //   function (err, docs) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("Updated User : ", docs);
  //     }
  //   }
  // );
//   var change;
// todoSchema.todo.findById(todo_id, (err, doc) => {
//   if (!err) {
//     // console.log(doc);
//     let tasks = doc.tasks;
//     // console.log(tasks);
//     tasks.forEach((e) => {
//       if (e.task == task_title) {
//         console.log(e.task);
//         change = e.iscomplete;
//       }
//     });
//   }
// });
// console.log(!change);
  todoSchema.todo.updateOne(
    {
      _id: todo_id,
      tasks: {
        $elemMatch: {
          _id: task_id,
        },
      },
    },
    {
      $set: { "tasks.$.iscomplete": req.body.status },
    },
    (err, docs) => {
      if (!err) {
        console.log(docs);
      } else {
        console.log(err);
      }
    }
  );
};
// 
// {
//   _id: new ObjectId("63b8f9ae1ef702008cbe8e01"),
//     title: 'Buy Car',
//       tasks: [
//         {
//           task: 'Audi',
//           iscomplete: false,
//           _id: new ObjectId("63b8f9ae1ef702008cbe8e02")
//         }
//       ],
//         date: '7 Jan 2023',

