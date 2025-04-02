import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change based on authentication logic
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
