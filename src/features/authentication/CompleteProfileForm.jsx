import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleCompleteProfile = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      console.log(message, user);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👍" });
        return;
      }
      if (user?.role === "OWNER") return navigate("/owner");
      if (user?.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      <form
        onSubmit={handleSubmit(handleCompleteProfile)}
        className="space-y-8"
        action=""
      >
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          type="text"
          errors={errors}
          validationSchema={{
            required: "نام الزامی است",
            minLength: {
              value: 5,
              message: "حدااقل 5 کاراکتر",
            },
          }}
        />
        <TextField
          label="ایمیل"
          name="email"
          register={register}
          type="text"
          errors={errors}
          validationSchema={{
            required: "ایمیل الزامی است",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "ایمیل وارد شده معتبر نیست",
            },
          }}
        />
        <div className="flex items-center justify-between">
          <RadioInput
            id="OWNER"
            label="کارفرما"
            name="role"
            value="OWNER"
            register={register}
            validationSchema={{
              required: "ضروری است",
            }}
            errors={errors}
          />

          <RadioInput
            id="FREELANCER"
            label="فریلنسر"
            name="role"
            value="FREELANCER"
            register={register}
            validationSchema={{
              required: "ضروری است",
            }}
            errors={errors}
          />
        </div>

        <div>
          {isPending ? (
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

export default CompleteProfileForm;
