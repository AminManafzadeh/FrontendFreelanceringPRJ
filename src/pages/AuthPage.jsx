import AuthContainer from "../features/authentication/AuthContainer";

function AuthPage() {
  return (
    <div className=" bg-secondary-0 h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className=" flex items-center justify-center pt-16">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
