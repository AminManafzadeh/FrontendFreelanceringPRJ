import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export default function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("Dark Mode context was used outside of Darkmode");

  return context;
}
