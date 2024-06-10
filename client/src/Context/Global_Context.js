import React, { createContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  // Load data from local storage when the component mounts
  const initialToken = localStorage.getItem("token") || "";
  const initialUser = JSON.parse(localStorage.getItem("user")) || {};
  const initialDoctorList =
    JSON.parse(localStorage.getItem("doctorList")) || [];
  const initialReload = JSON.parse(localStorage.getItem("reload")) || false;

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const [doctorList, setDoctorList] = useState(initialDoctorList);
  const [reload, setReload] = useState(initialReload);

  // Update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("doctorList", JSON.stringify(doctorList));
  }, [doctorList]);

  useEffect(() => {
    localStorage.setItem("reload", JSON.stringify(reload));
  }, [reload]);

  return (
    <GlobalStateContext.Provider
      value={{
        user,
        token,
        doctorList,
        reload,
        setUser,
        setToken,
        setDoctorList,
        setReload,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
