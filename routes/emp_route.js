let express=require("express");
let router=express.Router();
let {users}=require('../models/users');
router.post("/register",async(req,res)=>{
    console.log(req.body);
    let newuser=users(req.body);
    let result=await newuser.save();
    res.send(result);
});
router.post("/login",(req,res)=>{
    res.send("login page called");
});
router.get("/view task",(req,res)=>{
    res.send("View task page called");
});
router.put("/updatestatus",(req,res)=>{
    res.send("update status page called");
});
module.exports=router;
