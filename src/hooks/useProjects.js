import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";

export default function useProjects() {
  const { search } = useLocation();
  // const queryObject = queryString.parse(search);
  const queryObject = Object.fromEntries(new URLSearchParams(search));
  console.log(queryObject);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getAllProjectsApi(search),
  });

  const { projects } = data || {};
  return { projects, isLoading };
}
