const express = require("express");
const router = express.Router();

/**
 * User login via email
 */
router.get("/login",(req, res, next)=>{
    res.send('Login response');
});

/**
 * User signup via email
 */
router.post("/signup", (req, res, next)=>{
    res.send('Signup response');
});

module.exports = router;