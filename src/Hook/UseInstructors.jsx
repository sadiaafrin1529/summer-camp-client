
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  const {user}= useContext(AuthContext)
  

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["instractor", user?.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/instructor/${user?.email}`);
      console.log("isInstructor response", res);
      return res.data.instractor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructors;