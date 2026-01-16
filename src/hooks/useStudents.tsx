import { useContext } from "react";
import { StudentContext } from "../store/students/studentContext";

export const useStudents = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudents must be used inside a ProductProvider");
  }

  return context;
};