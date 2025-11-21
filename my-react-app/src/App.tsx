import "./App.css";
import { UserCard } from "./components/UserCard";
import { CardListGeneric } from "./components/CardListGenric";
import type { ReactNode } from "react";  // ⬅ likely unused

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
    },
    {
      id: 3,
      name: "Charlie",
      age: 30,
      isAdmin: false,
      hobbies: ["Coding"],
      role: "user",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>User List (Using CardList Generic Component)</h1>

      <CardListGeneric
        items={users}
        renderCard={(u) => (
          <UserCard
            id={u.id}
            name={u.name}
            age={u.age}
            isAdmin={u.isAdmin}
            hobbies={u.hobbies}
            role={u.role}
            status={u.status}
            onSelect={handleSelect}
          />
        )}
      />
    </div>
  );
}

export default App;
