import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSendOtp, register, isSending }) {
  return (
    <div className="w-full h-full">
      <form onSubmit={onSendOtp} className="space-y-4" action="">
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          type="number"
        />
        <div>
          {isSending ? (
            <Loading width="4rem" height="4rem" />
          ) : (
            <button className="btn btn--primary w-full">ارسال کد تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
