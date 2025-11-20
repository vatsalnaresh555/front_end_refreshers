import { createContext } from "react";      

// We will store just a string (the username) in context for now.
export const UserContext = createContext<string>("Sairam");