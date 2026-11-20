import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
