import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalsApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { mutateAsync: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalsApi,
    onSuccess: (data) => {
      toast.success(data?.message);

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { createProposal, isCreating };
}
