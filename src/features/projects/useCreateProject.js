import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOwnerProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutateAsync: createProject } = useMutation({
    mutationFn: createOwnerProjectApi,
    onSuccess: (data) => {
      toast.success(data?.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isCreating, createProject };
}
