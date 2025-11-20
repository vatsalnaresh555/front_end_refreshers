import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";               // value import
import type { AuthContextType, User } from "./AuthContext"; // type-only import

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        const parsed: User = JSON.parse(saved);
        setUser(parsed);
      } catch (error) {
        console.error("Failed to parse user", error);
      }
    }
    setLoading(false);
  }, []);

  const login = (name: string) => {
    const newUser: User = { name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
