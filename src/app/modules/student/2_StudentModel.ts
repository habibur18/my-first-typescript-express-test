import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './1_StudentInterface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: String,
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String,
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: String,
  occupation: String,
  contactNo: String,
  address: String,
});

const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: { type: String, enum: ['male', 'female'], required: true },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImage: String,
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
});

export const StudentModel = model<Student>('student', StudentSchema);
