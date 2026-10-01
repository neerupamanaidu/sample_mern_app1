from fastapi import FastAPI
from models import Student,Staff
from database import student_collection,staff_collection
app = FastAPI()
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
    }
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    students=student_collection.find()
    return [student_details(Student)for Student in students]
def getStaff():
    staff=staff_collection.find()
    return [staff_details(Staff)for Staff in staff]
@app.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return {"message":"data inserted successfully"}
@app.post("/register")
def register(sta:Staff):
    result=staff_collection.insert_one(sta.model_dump())
    return {"message":"data inserted successfully"}
@app.put("/updateprofile")
def updateprofile():
    return "update profile called"
@app.delete("/deleteprofile")
def deleteprofile():
    return "delete profile called"
@app.get("/getStudentDet/{userid}")
def getStudentDet(userid:int):
    return{"user_id":userid}
@app.get("/getstudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return{"page":page,"limit":limit}