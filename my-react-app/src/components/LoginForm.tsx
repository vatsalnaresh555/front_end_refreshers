import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", { email, password });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log("handleEmailChange");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log("handlePasswordChange");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: 20 }}>
        <h2>Login Form</h2>

        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={handleEmailChange}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
