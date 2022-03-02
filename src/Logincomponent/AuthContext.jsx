import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [mobileNo, setMobileNo] = useState("");
  const [createOtp, setCreateOtp] = useState("");
  const value = { mobileNo, setMobileNo };
  // setCreateOtp(Math.random(4))
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
