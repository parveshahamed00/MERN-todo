const mongoose = require("mongoose");
var options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    var date = new Date();
   var today = date.toLocaleDateString("en-IN", options); // formating date
const todoSchema = new mongoose.Schema({
  title: String,
  tasks: [{
    task:String,
    iscomplete:{
      type:Boolean,
      default:false
    }
  }],
  date: {
    type: String,
		default: today
  },
});
exports.todo = mongoose.model("Todo", todoSchema);
