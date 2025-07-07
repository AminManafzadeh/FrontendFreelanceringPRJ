import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editOwnerProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProjects() {
  const queryClient = useQueryClient();

  const { isPending: isEditProjecting, mutateAsync: editProject } = useMutation(
    {
      mutationFn: editOwnerProjectApi,
      onSuccess: (data) => {
        toast.success(data?.message);

        queryClient.invalidateQueries({
          queryKey: ["owner-projects"],
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    }
  );

  return { isEditProjecting, editProject };
}
