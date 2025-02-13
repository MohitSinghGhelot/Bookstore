"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); // Track loading state


  useEffect(() => {

    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Once user is checked, stop loading

  }, []);

  return (
    <AppContext.Provider value={{ user, setUser , loading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
