import express from "express";
import studentsRouter from "../routes/students.js"
const port = 3000;

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("HELLO")
});
app.use("/students", studentsRouter)

app.listen(port, () => console.log("server is listen"))