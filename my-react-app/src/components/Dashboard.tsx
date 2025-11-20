import Profile from "./Profile.tsx";
type DashboardProps = {
    username: string;
}
function Dashboard({ username }: DashboardProps) {
    return (
        <div>
            <h2>Dashboard Component</h2>
            <Profile username={username} />
        </div>
    );
}

export default Dashboard;