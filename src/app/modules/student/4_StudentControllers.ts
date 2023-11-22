import { Request, Response } from 'express';
import { studentServicess } from './5_StudentService';

const CreateStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;
    console.log(StudentData);
    // will call the service fucntion to send the data to the database
    const result = await studentServicess.createStudentIntoDB(StudentData);
    res.status(200).json({
      success: true,
      student: 'Student has been created successfully',
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
    // res.status(500).json({
    //   success: false,
    //   message: error.message,
    // })
  }
};

// get all students
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServicess.getAllStudentsFromDB();
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'No students found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'All students retrieved successfully',
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
  }
};

// get Single Student By Id
const GetSingleStudentById = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await studentServicess.getSingleStudentFromDB(studentId);
    if (!result) {
      // Student with the give Id was nto found
      return res.status(404).json({
        success: false,
        message: `No Student found with id ${studentId}`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Student with id ${studentId} retrieved successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  CreateStudent,
  getAllStudents,
  GetSingleStudentById,
};
