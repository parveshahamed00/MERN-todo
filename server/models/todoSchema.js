const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  task: Array,
  date: String,
  isImportant:Boolean
});
exports.todo = mongoose.model("Todo", todoSchema);
