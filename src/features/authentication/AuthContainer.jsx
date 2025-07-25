import { useEffect, useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { handleSubmit, register, getValues } = useForm();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isSending,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  console.log(otpResponse);

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      console.log(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            register={register}
            onSendOtp={handleSubmit(sendOtpHandler)}
            isSending={isSending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onResendOtp={handleSubmit(sendOtpHandler)}
            otpResponse={otpResponse}
          />
        );

      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
