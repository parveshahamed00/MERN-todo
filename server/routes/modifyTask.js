const router=require("express").Router()
const modifyTask=require("../controllers/modifyTask")
router.put("/:id", modifyTask.modifyTask);
module.exports=router