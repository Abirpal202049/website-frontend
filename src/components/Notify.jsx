import React from "react";
import { store } from "react-notifications-component";

const Notify = ({ message }) => (
  <div className="w-full px-4 py-2 md:px-8 md:py-4 bg-shades-0 text-shades-4 transition rounded-sm select-none">
    {message}
  </div>
);

const notify = (message) => {
  store.addNotification({
    content: <Notify message={message} />,
    insert: "bottom",
    container: "bottom-left",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: 3000,
    },
  });
};

export default notify;
