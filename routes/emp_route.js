let express=require("express");
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');
router.post("/register",async(req,res)=>{
    console.log(req.body);
    req.body.password=await bcrypt.hash(req.body.password,10);
    let newuser=users(req.body);
    let result=await newuser.save();
    res.send(result);
});
router.post("/login",async(req,res)=>{
    let result=await users.findOne({email:req.body.email})

    if(result){
        let matchpass=await bcrypt.compare(req.body.password,result.password);
        if(matchpass){
            res.send("login sucessful");
        }else{
            res.send("login failed")
        }
    }else{
        res.send("user not found ")
    }
});
router.get("/view task",(req,res)=>{
    res.send("View task page called");
});
router.put("/updatestatus",(req,res)=>{
    res.send("update status page called");
});
module.exports=router;
