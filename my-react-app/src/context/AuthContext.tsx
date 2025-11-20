import { createContext, useContext } from "react";

export type User = {
  name: string;
};
export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (name: string) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
    if (!context) { 
    throw new Error("useAuth must be used within an AuthProvider");     
    }

    return context;
};
