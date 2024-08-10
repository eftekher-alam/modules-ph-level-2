import { Schema, model, connect } from "mongoose";

// here we can user type that will consider as interface
// or we can use interface directly

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TStudent = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  gender: "male" | "female";
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "O +" | "O -" | "A +" | "A +" | "B +" | "B -" | "AB +" | "AB -";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
};
