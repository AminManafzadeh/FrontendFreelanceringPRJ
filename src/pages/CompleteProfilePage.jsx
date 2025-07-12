import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfilePage() {
  return (
    <div className=" bg-secondary-0 h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-16">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
}

export default CompleteProfilePage;
