import { useEffect, useState, type ReactNode } from "react";
import type { Scout, StudentPayload } from "../../types/scout";
import { api } from "../../api";
import { studentPayloadToScout } from "../../utils/helpers";
import { StudentContext } from "./studentContext";

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<Scout[]>([]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await api.get<StudentPayload[]>("/students");

      const studentsMapped = response.data.map(studentPayloadToScout);
      setStudents(studentsMapped);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createStudent = async (payload: StudentPayload) => {
    try {
      setLoading(true);
      await api.post("/students", payload);
      await fetchStudents();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

   const updateStudent = async (id: string, payload: StudentPayload) => {
    try {
      setLoading(true);
      await api.put(`/students/${id}`, payload);
      await fetchStudents();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeStudent = async (id: string) => {
    try {
      setLoading(true);
      await api.delete(`/students/${id}`);
      await fetchStudents();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getStudent = async (id: string): Promise<Scout | null> => {
    try {
      const response = await api.get(`/students/${id}`);
      return studentPayloadToScout(response.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };


  const onConfirmPayment = async (product_id: string, student_id: string, status: string) => {
    try {
      setLoading(true);
      await api.patch(`/students/${student_id}/payments/status`,
        {
          status
        },
        {
          headers: {
            product_id
          }
        }
      );
      await fetchStudents();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        loading,
        students,
        createStudent,
        fetchStudents,
        updateStudent,
        removeStudent,
        getStudent,
        onConfirmPayment
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
