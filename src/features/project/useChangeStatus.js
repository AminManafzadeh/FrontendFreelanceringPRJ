import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useChangeStatus() {
  const {
    mutateAsync: changeProposalStatus,
    isPending: isChangeProposalStatusing,
  } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { changeProposalStatus, isChangeProposalStatusing };
}
