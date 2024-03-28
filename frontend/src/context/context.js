import React, { useState, useContext } from "react";
import { getUserInfo, setAuthorization, clearAuthorization, setUserinfo } from "../utils/Authorization";
import lang from "../utils/lang";

const LanguageContext = React.createContext();
const UserContext = React.createContext();

// Method for logging in, used to set user information
const login = (data) => {
  setUserinfo(data);
  setAuthorization(data.authorization);
};

const info = () => getUserInfo();

// Method for logging out, clears user information
const logout = () => {
  clearAuthorization();
};

export const DProvider = ({ children }) => {
  return (
    <LanguageContext.Provider value={lang}>
      <UserContext.Provider value={{ info, login, logout }}>
        {children}
      </UserContext.Provider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

/**
 * Get user information
 * @returns
 **/
export const useUser_ = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a LanguageProvider");
  }
  return context;
};
