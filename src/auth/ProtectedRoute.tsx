import { useAuth0 } from "@auth0/auth0-react";
import { RiLoader5Line } from "react-icons/ri";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <RiLoader5Line className="mr-2 h-10 w-10 animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
  // return isAuthenticated ? (<Outlet />) : (<Navigate to="/" replace/>)
};

export default ProtectedRoute;
