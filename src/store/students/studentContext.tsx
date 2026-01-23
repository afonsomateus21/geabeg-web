import { createContext } from "react";
import type { Scout, ScoutCategoryType, StudentPayload } from "../../types/scout";

interface StudentContentProps {
  loading: boolean;
  students: Scout[] | null;
  createStudent: (payload: StudentPayload) => Promise<void>;
  updateStudent: (id: string, payload: StudentPayload) => Promise<void>;
  fetchStudents: (category?: ScoutCategoryType | "todos") => Promise<void>;
  removeStudent: (id: string) => Promise<void>;
  getStudent: (id: string) => Promise<Scout | null>;
  onConfirmPayment: (product_id: string, student_id: string, status: string) => Promise<void>;
}

export const StudentContext = createContext<StudentContentProps | undefined>(undefined);