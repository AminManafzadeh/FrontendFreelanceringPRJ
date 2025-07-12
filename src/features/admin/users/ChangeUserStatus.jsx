import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";

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

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();

  const { changeUserStatus, isChangStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    console.log(data);

    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
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
          {isChangStatus ? (
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

export default ChangeUserStatus;
