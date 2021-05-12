// import express router
const router = require("express").Router();

// import User controllers
const {createUser} = require("../controllers/User.controllers/CreateUser"),
    {readUsers} = require("../controllers/User.controllers/ReadUsers"),
    {updateUser} = require("../controllers/User.controllers/UpdateUser"),
    {deleteUser} = require("../controllers/User.controllers/DeleteUser");

// create user with post request
router.post("/create-user", createUser);

// read user(s) with get request
router.get("/get-user", readUsers);
router.get("/get-user/:email", readUsers);

// update a user with put request
router.put("/update-user/:email", updateUser);

// delete a user with delete request
router.delete("/delete-user", deleteUser);

module.exports = router;