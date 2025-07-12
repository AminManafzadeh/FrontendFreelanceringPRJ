import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleCheckOtp = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      console.log(data);
      toast.success(message);

      if (!user?.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👍" });
        return;
      }
      if (user.status == 2 && user?.role === "OWNER") return navigate("/owner");
      if (user.status == 2 && user?.role === "FREELANCER")
        return navigate("/freelancer");
      if (user.status == 2 && user?.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time >= 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (time) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="w-full h-screen space-y-4">
      <button onClick={onBack}>
        <HiArrowRight className="w-5 h-5 text-secondary-600" />
      </button>
      {otpResponse && (
        <p className="flex items-center text-secondary-700">
          کد تایید برای شماره موبایل ارسال شد {otpResponse?.phoneNumber}
          <button onClick={onBack} className="mr-3">
            <CiEdit className="w-5 h-5 text-primary-800" />
          </button>
        </p>
      )}
      <div>
        {time > 0 ? (
          <p className="text-secondary-700">{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp} className="btn btn--secondary my-3">
            ارسال مجدد کد تایید
          </button>
        )}
      </div>
      <form onSubmit={handleCheckOtp} className="space-y-4">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          inputStyle={{
            width: "2rem",
            height: "2rem",
            margin: "0 0.5rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid rgb(var(--color-primary-300))",
            direction: "rtl",
          }}
          containerStyle={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            flexDirection: "row-reverse",
          }}
        />
        <div>
          {isPending ? (
            <Loading width="4rem" height="4rem" />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
