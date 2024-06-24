import React, { createContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  // Load data from local storage when the component mounts
  const initialToken = localStorage.getItem("token") || "";
  const initialUser = JSON.parse(localStorage.getItem("user")) || {};
  const initialDoctorList =
    JSON.parse(localStorage.getItem("doctorList")) || [];
  const initialUserList = JSON.parse(localStorage.getItem("userList")) || [];
  const initialReload = JSON.parse(localStorage.getItem("reload")) || false;
  const initialApplicationList =
    JSON.parse(localStorage.getItem("applicationList")) || [];

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const [doctorList, setDoctorList] = useState(initialDoctorList);
  const [userList, setUserList] = useState(initialUserList);
  const [reload, setReload] = useState(initialReload);
  const [applicationList, setApplicationList] = useState(
    initialApplicationList
  );

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
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  useEffect(() => {
    localStorage.setItem("reload", JSON.stringify(reload));
  }, [reload]);

  useEffect(() => {
    localStorage.setItem("applicationList", JSON.stringify(applicationList));
  }, [applicationList]);

  return (
    <GlobalStateContext.Provider
      value={{
        user,
        token,
        doctorList,
        reload,
        applicationList,
        userList,
        setUser,
        setToken,
        setDoctorList,
        setReload,
        setApplicationList,
        setUserList,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
