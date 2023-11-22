import { Student } from './1_StudentInterface';
import { StudentModel } from './2_StudentModel';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// get all students
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get student by id
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const studentServicess = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
