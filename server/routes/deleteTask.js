const router=require("express").Router()
const deleteTask=require("../controllers/deleteTask")
router.delete("/:id",deleteTask.deleteTask)
module.exports=router