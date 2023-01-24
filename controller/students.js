let students = [
    {
        id: 1,
        name: "Mahmoud",
        age: 25
    },
    {
        id: 2,
        name: "Ahmed",
        age: 15
    },
    {
        id: 3,
        name: "Mido",
        age: 35
    }
]
export const getStudents = (req, res) => {
    res.status(200).json(students)
}
export const deleteStudent=(req, res) => {
    const id = Number(req.params.id)
    students = students.filter((student) => student.id !== id)
    res.status(200).json(students)
}
export const getStudent=(req, res) => {
    const id = Number(req.params.id)
    const student = students.find((student) => student.id === id)
    res.status(200).json(student)
}
export const postStudent=(req, res) => {
    const student = req.body
    students.push(student)
    res.status(200).send("student has been added")
}
export const patchStudent=(req, res) => {
    const id = Number(req.params.id)
    const { age, name } = req.body

    const student = students.find((student) => student.id === id)
    if (name) {
        student.name = name
    }
    if (age) {
        student.age = age
    }
    res.status(200).send("student has been updated")
}