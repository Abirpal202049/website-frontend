import React, { useState } from "react";

const getCookies = () =>
  document.cookie
    .split(";")
    .map((e) => e.trim().split("="))
    .reduce((l, [k, v]) => (k && v ? { ...l, [k]: v } : l), {});

export const Global = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [adminToken, setAdminToken] = useState(getCookies().adminToken);

  const openLoginPopup = () => setLoginPopup(true);
  const closeLoginPopup = () => setLoginPopup(false);

  const openLogoutPopup = () => setLogoutPopup(true);
  const closeLogoutPopup = () => setLogoutPopup(false);

  const updateAdminToken = (token, maxAge = 86400) => {
    setAdminToken(token);
    document.cookie = `adminToken=${token}; max-age=${maxAge}`;
  };

  return (
    <Global.Provider
      value={{
        loginPopup,
        openLoginPopup,
        closeLoginPopup,
        logoutPopup,
        openLogoutPopup,
        closeLogoutPopup,
        adminToken,
        updateAdminToken,
      }}
    >
      {children}
    </Global.Provider>
  );
};

export default GlobalProvider;
