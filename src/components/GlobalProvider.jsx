import React, { useState } from "react";

import Login from "./Login";

export const Global = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const openLogin = () => setLogin(true);
  const closeLogin = () => setLogin(false);

  return (
    <Global.Provider value={{ login, openLogin, closeLogin }}>
      <Login />
      {children}
    </Global.Provider>
  );
};

export default GlobalProvider;
