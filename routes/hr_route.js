let express=require("express");
let router=express.Router();
let{users}=require('../models/users')
router.get("/viewemployees",async(req,res)=>{
    let result=await users.find();
    res.send(result);
});
router.post("/assignemployees",(req,res)=>{
    res.send("Assign Employees router");
})
router.delete("/deleteemployees",(req,res)=>{
    res.send("Delete Employees router");
})
module.exports=router;
