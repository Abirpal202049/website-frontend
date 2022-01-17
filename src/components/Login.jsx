import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Global } from "./GlobalProvider";

const Login = () => {
  const { login, closeLogin } = useContext(Global);

  return (
    <Transition appear show={login} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-hidden"
        onClose={closeLogin}
      >
        <div className="h-screen px-4 text-center grid place-items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-xs sm:max-w-md p-6 my-4 md:my-8 overflow-hidden text-left text-base md:text-lg align-middle transition-all transform bg-shades-4 text-shades-0 shadow-xl rounded-2xl">
              <button
                className="absolute text-2xl md:text-4xl font-semibold top-2 right-6 text-shades-1"
                onClick={closeLogin}
              >
                x
              </button>
              <Dialog.Title as="h3" className="text-2xl font-medium leading-6">
                Login as Admin
              </Dialog.Title>
              <form className="m-4 mt-6 flex flex-col justify-around gap-2">
                <label className="font-bold" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow rounded-lg w-full py-2 px-3 bg-transparent placeholder:text-shades-0 border-2 border-transparent hover:border-shades-0 focus:border-shades-0"
                  name="passcode"
                  type="password"
                  id="password"
                  placeholder="Enter Admin Passcode"
                />

                <input
                  className="shadow rounded-lg w-full py-1 px-2 mt-4 font-semibold bg-shades-0 hover:bg-shades-4 text-shades-4 hover:text-shades-0 border-2 border-shades-0 cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Login;
