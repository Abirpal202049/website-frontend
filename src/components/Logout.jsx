import React, { useContext, useState } from "react";

import Popup from "./Popup";
import notify from "./Notify";
import Loader from "./Loader";
import { Global } from "./GlobalProvider";

import { request } from "../utils/API";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const { logoutPopup, closeLogoutPopup, adminToken, updateAdminToken } =
    useContext(Global);

  const logoutAdmin = async () => {
    setLoading(true);

    try {
      const res = await request({
        path: "api/admin/logout",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      const data = await res.json();

      if (res.status === 200 || res.status === 405) {
        notify("Logged Out Successfully");
      } else notify(data.error);
    } catch {
      notify("Logged Out");
    } finally {
      updateAdminToken("");
      closeLogoutPopup();
      setLoading(false);
    }
  };

  return (
    <Popup title="Log Out" show={logoutPopup} onClose={closeLogoutPopup}>
      <div className="w-full mt-4 flex gap-4">
        <button
          onClick={closeLogoutPopup}
          className="grow shadow rounded-lg w-full py-1 px-2 mt-4 bg-shades-0 text-shades-4 border-2 border-shades-0 transition hover:scale-x-105 active:scale-95"
        >
          Cancel
        </button>
        <button
          onClick={logoutAdmin}
          className="grow shadow rounded-lg w-full py-1 px-2 mt-4 bg-shades-0 text-shades-4 border-2 border-shades-0 transition hover:scale-x-105 active:scale-95 group relative"
        >
          Log Out
          {loading && <Loader />}
        </button>
      </div>
    </Popup>
  );
};

export default Logout;
