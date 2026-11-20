import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wraps a page: shows it only for logged-in users,
// otherwise redirects to /login.
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
