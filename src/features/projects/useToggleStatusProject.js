import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleOwnerProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleStatusProject() {
  const queryClient = useQueryClient();

  const { isPending: isToggleStatus, mutateAsync: toggleStatusProject } =
    useMutation({
      mutationFn: toggleOwnerProjectApi,
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

  return { isToggleStatus, toggleStatusProject };
}
