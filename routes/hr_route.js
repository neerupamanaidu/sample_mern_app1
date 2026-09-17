let express=require("express");
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("View Employees router");
});
router.post("/assignemployees",(req,res)=>{
    res.send("Assign Employees router");
})
router.delete("/deleteemployees",(req,res)=>{
    res.send("Delete Employees router");
})
module.exports=router;
