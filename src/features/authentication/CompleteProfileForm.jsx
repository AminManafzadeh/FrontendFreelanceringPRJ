import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleCompleteProfile = async (e) => {
    e.preventDefault();

    try {
      const data = await mutateAsync({ name, email });
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      <form onSubmit={handleCompleteProfile} className="space-y-8" action="">
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <div className="flex items-center justify-between">
          <RadioInput
            id="OWNER"
            label="کارفرما"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value="OWNER"
            checked={role === "OWNER"}
          />

          <RadioInput
            id="FREELANCER"
            label="فریلنسر"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value="FREELANCER"
            checked={role === "FREELANCER"}
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
