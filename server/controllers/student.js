import StudentData from "../models/student.js";

export const getStudents=async(req,res)=> {
    try {
        console.log("kkkkk"+req.body);
        const allStudents= await StudentData.find();
        // console.log(req.body);
        res.status(200).json(allStudents);
    } catch (error) {
        // console.log(req.body);
        res.status(404).json({message:error.message})
    }
}

export const createStudent=async (req,res)=> {
    const student=req.body;
    console.log('helooooo'+req.body);

    const newStudent=new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}