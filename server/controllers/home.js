const todo = require("../models/todoSchema");
exports.home = (req, res) => {
//   var options = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   };
//   var today = new Date();
//   today = today.toLocaleDateString("en-IN", options); // formating date

//   const insertTodo = new todo.todo({
//     title: "Study",
//     task: ["Learn react", "do todo project"],
//     date: today,
//     isImportant:false
//   });
// insertTodo.save((err, docs) => {
//   if (!err) {
//     res.json(docs);
//   }
// });

todo.todo.find((err,docs)=>{
    if(!err){
        res.json(docs)
    }
})
};
