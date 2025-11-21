import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { UserCard } from "./components/UserCard";

type UserItem = {
  id: number;
  name: string;
  age?: number;
  isAdmin: boolean;
  hobbies: string[];
  role?: "user" | "admin" | "guest";
  status?: "online" | "offline";
};

function App() {
    /* 
  // You can uncomment these one-by-one to test different components:

  // 1. Show Counter component
  // return (<div><Counter /></div>);

  // 2. Show NameInput component
  // return (<div><NameInput /></div>);

  // 3. Show Hello component
  // return (<Hello />); 
  */

 /* return (
    <div>
     
      <Dashboard username={username} />
    </div>
  );*/
  /*const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: 20 }}>Loading user...</div>;
  }

  return isAuthenticated ? <Dashboard /> : <Login />;
}*/

{/* ✅ Full data */}
     {/* <UserCard
        id={1}
        name="Alice"
        age={25}
        isAdmin={true}
        hobbies={["Reading", "Gaming"]}
        role="admin"
        status="online"
        onSelect={handleSelect}
      />*/}

      {/* ✅ Missing optional props (age, role, status) */}
   {/* ✅ Full data */}
   

      {/* ✅ Missing optional props (age, role, status) */}
     {/* <UserCard
        id={2}
        name="Bob"
        isAdmin={false}
        hobbies={["Cooking"]}
        onSelect={handleSelect}
        // age, role, status omitted on purpose
      />*/}
  const handleSelect = (id: number) => {
    console.log("Selected user id:", id);
  };

  

  const users: UserItem[] = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      isAdmin: true,
      hobbies: ["Reading"],
      role: "admin",
      status: "online",
    },
    {
      id: 2,
      name: "Bob",
      isAdmin: false,
      hobbies: ["Music", "Travel"],
      // age, role, status omitted on purpose
    },
    {
      id: 3,
      name: "Charlie",
      age: 30,
      isAdmin: false,
      hobbies: ["Coding"],
      role: "user",
      // status omitted → defaults to "offline"
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>User List</h1>

      {/* 🔥 Example: one manual user */}
      <UserCard
        id={10}
        name="Demo User"
        age={40}
        isAdmin={true}
        hobbies={["Swimming", "Cooking"]}
        role="admin"
        status="online"
        onSelect={handleSelect}
      />

      {/* 🔥 Loop through the array */}
      {users.map((u) => (
        <UserCard
          key={u.id}
          id={u.id}
          name={u.name}
          age={u.age}
          isAdmin={u.isAdmin}
          hobbies={u.hobbies}
          role={u.role}
          status={u.status}
          onSelect={handleSelect}
        />
      ))}
      <LoginForm/>
    </div>
  );
}

export default App;
