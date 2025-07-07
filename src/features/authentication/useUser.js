import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

function useUser() {
  const { data, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user } = data || {};

  return { isLoading, user };
}

export default useUser;
