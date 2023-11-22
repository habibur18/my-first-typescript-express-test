import express from 'express';
import { StudentControllers } from './4_StudentControllers';
const Router = express.Router();

// will call the controller function
// create a student
Router.post('/create-student', StudentControllers.CreateStudent);
// get all students
Router.get('/', StudentControllers.getAllStudents);
// get student by id
Router.get('/get-student-by-id/:id', StudentControllers.GetSingleStudentById);
export const StudentRoutes = Router;
