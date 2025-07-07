import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeStatus from "./useChangeStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در  انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { id: projectId } = useParams();
  const { changeProposalStatus, isChangeProposalStatusing } = useChangeStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    console.log(data);

    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["projecct", projectId] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          register={register}
          label="تغییر وضعیت"
          name="status"
          options={options}
          required
        />
        <div className="mt-8">
          {isChangeProposalStatusing ? (
            <Loading width="4rem" height="4rem" />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
