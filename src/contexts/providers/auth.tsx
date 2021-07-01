import React, { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContext {
  token: string;
  storeToken(token: string): void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState("");

  function storeToken(token: string) {
    setToken(token);
  }

  return (
    <AuthContext.Provider value={{ token, storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
