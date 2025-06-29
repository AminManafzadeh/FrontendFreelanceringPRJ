import SendOTPForm from "../features/authentication/SendOTPForm";

function AuthPage() {
  return (
    <div className="w-full sm:max-w-sm flex items-center justify-center">
      <SendOTPForm />
    </div>
  );
}

export default AuthPage;
