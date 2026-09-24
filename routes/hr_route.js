let express=require("express");
let router=express.Router();
let {users}=require("../models/users");
let {tasks}=require("../models/tasks");
router.get("/viewemployees",(req,res)=>{
    res.send("View Employees router");
});

router.post("/assign-task",async(req,res)=>{
    let data =req.body;
    let newTask=new tasks(data);
    let result=await newTask.save();
    res.send(result);
});

router.post("/assignemployees",(req,res)=>{
    res.send("Assign Employees router");
})
router.delete("/deleteemployees",async (req,res)=>{
    res.send("Delete Employees router");
})
module.exports=router