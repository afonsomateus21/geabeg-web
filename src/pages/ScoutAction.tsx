import { useParams } from "react-router";
import { ScoutForm } from "../components/forms/ScoutForm";
import { useEffect } from "react";

export const ScoutAction = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);
  
  return (
    <div className="w-full h-full">
      <ScoutForm />
    </div>
  );
}