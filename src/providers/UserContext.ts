import { createContext } from "react";

export interface iUserContext {
  name: string;
  setName: (name: string) => void;
}
export const UserContext = createContext<iUserContext | undefined>(undefined);
