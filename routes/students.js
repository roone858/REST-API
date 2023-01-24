import express from "express"
import { getStudents,deleteStudent,getStudent,postStudent,patchStudent } from "../controller/students.js";
const router = express.Router();


router.get("/",getStudents )
router.get("/:id", getStudent)
router.delete("/:id", deleteStudent)
router.post("/", postStudent)
router.patch("/:id", patchStudent)
export default router;