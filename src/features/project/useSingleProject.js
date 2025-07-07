import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useSingleProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { project } = data || {};

  return { project, isLoading };
}
