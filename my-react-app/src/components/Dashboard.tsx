import Profile from "./Profile.tsx";
import { useAuth } from "../context/AuthContext";
type DashboardProps = {
    username: string;
}
/* function Dashboard({ username }: DashboardProps) {
    return (
        <div>
           
            <Profile  />
        </div>
    );
}*/
const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>
        Welcome, <strong>{user?.name}</strong> 👋
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
/*function Dashboard({ username }: DashboardProps) {
    return (
        <div>
            <h2>Dashboard Component</h2>
            <Profile username={username} />
        </div>
    );
}*/

export default Dashboard;