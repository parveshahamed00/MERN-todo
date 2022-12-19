const router = require("express").Router();
const addTodo = require("../controllers/addTodo");
router.post("/", addTodo.addTodo);
module.exports = router;
