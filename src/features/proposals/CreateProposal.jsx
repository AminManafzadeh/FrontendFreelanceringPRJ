import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";
import Loading from "../../ui/Loading";

function CreateProposal({ onClose, projectId }) {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <TextField
          type="text"
          label="توضیحات"
          name="description"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات نا معتبر است",
            },
          }}
        />

        <TextField
          type="number"
          label="قیمت"
          name="price"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "قیمت ضروری است",
          }}
        />

        <TextField
          type="number"
          label="مدت زمان"
          name="duration"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
        />

        <div>
          {isCreating ? (
            <Loading width="4rem" height="4rem" />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
