import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) navigate("/not-access");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

  if (isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-secondary-100">
        <Loading width="8rem" height="8rem" />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
