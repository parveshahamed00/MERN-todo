const router=require("express").Router()
const modifyTask=require("../controllers/modifyTask")
router.put("/:todo_id/:task_id", modifyTask.modifyTask);
module.exports=router