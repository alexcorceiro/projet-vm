const express = require("express")
const { register, login, logout, getUser, update, getUsers, deleteUser } = require("../controller/userController")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/getUser/:id", getUser)
router.put("/updateUser/:id", update)
router.get("/getUsers", getUsers)
router.delete("/deleteUser/:id", deleteUser)


module.exports = router