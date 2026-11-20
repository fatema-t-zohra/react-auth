import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>This is Dashboard Page.</p>
      <p>
        Logged in as: <strong>{user.email}</strong>
      </p>
    </div>
  );
}

export default Dashboard;
