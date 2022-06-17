const { Router } = require("express");

const userRouter = Router();

userRouter.get("/create", (req, res) => {
    res.send("userRouter")
    console.log("this is userRouter.");
})

module.exports = userRouter;