const router=require("express").Router()
const home=require("../controllers/home")
router.get("/",home.home)
module.exports=router
