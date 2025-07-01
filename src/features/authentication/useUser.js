import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

function useUser() {
  return useQuery({
    queryFn: getUser,
    queryKey: ["get-user"],
    retry: false,
    refetchOnWindowFocus: true,
  });
}

export default useUser;
