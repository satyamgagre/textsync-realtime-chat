import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const getStoredUser = () => {
  try {
    const user = localStorage.getItem("chat-user");

    if (!user || user === "undefined") return null;

    return JSON.parse(user);
  } catch (error) {
    console.error("Invalid chat-user in localStorage", error);
    localStorage.removeItem("chat-user");
    return null;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(getStoredUser());

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
