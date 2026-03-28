import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("Goutham Amin");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
