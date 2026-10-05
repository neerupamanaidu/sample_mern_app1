from fastapi import APIRouter
from bson import ObjectId
from models import Student
from database import student_collection

# Convert MongoDB document into JSON format
def student_details(student):
    return {
        "id": str(student["_id"]),
        "name": student["name"],
        "email": student["email"],
        "age": student["age"],
        "mark": student["mark"]
    }

student_router = APIRouter(prefix="/student", tags=["student"])

# localhost:8000/getStudents
@student_router.get("/getStudents")
def getStudents():
    students = student_collection.find()
    return [student_details(student) for student in students]

@student_router.post("/register")
def register(stu: Student):
    result = student_collection.insert_one(stu.model_dump())
    return {"message": "data inserted success"}

@student_router.get("/getParticularstudent/{stuid}")
def getParticularstudent(stuid: str):
    student = student_collection.find_one({"_id": ObjectId(stuid)})
    return student_details(student)

@student_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid: str):
    result = student_collection.delete_one({"_id": ObjectId(stuid)})
    return  "Student deleted successfully"

@student_router.put("/updatestudent/{stuid}")
def updatestudent(stuid: str):
    result = student_collection.update_one({"_id": ObjectId(stuid)},{"$set":stu.model_dumb()})
    return  "Student deleted successfully"