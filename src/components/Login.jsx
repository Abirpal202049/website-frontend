import React, { useContext, useState } from "react";

import Popup from "./Popup";
import notify from "./Notify";
import Loader from "./Loader";
import { Global } from "./GlobalProvider";
import { request } from "../utils/API";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { loginPopup, closeLoginPopup, updateAdminToken } = useContext(Global);

  const loginAdmin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const body = [...new FormData(e.target)]
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join("&");

      const res = await request({
        path: "api/admin/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      const data = await res.json();

      if (res.status === 200) {
        notify("Logged In Successfully");
        updateAdminToken(data.accessToken);
        closeLoginPopup();
      } else notify(data.error);
    } catch (error) {
      notify("An Error Occurred While Logging In");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popup title="Login as Admin" show={loginPopup} onClose={closeLoginPopup}>
      <form
        onSubmit={loginAdmin}
        className="m-4 mt-6 flex flex-col justify-around gap-2"
      >
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="shadow rounded-lg w-full py-2 px-3 bg-transparent placeholder:text-shades-0 border-2 border-transparent hover:border-shades-0 focus:border-shades-0"
          name="passcode"
          type="password"
          id="password"
          placeholder="Enter Admin Password"
          autoFocus={true}
        />

        <button
          className="shadow rounded-lg w-full py-1 px-2 mt-4 bg-shades-0 text-shades-4 border-2 border-shades-0 transition hover:scale-x-105 active:scale-95 group relative"
          type="submit"
        >
          Login
          {loading && <Loader />}
        </button>
      </form>
    </Popup>
  );
};

export default Login;
