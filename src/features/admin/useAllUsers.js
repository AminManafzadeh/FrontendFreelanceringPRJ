import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "../../services/authService";

function useAllUsers() {
  const { data, isLoading } = useQuery({
    queryFn: getAllUsersApi,
    queryKey: ["users"],
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { users } = data || {};

  return { isLoading, users };
}

export default useAllUsers;
