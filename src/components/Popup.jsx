import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Popup = ({ title, show, onClose, children }) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-hidden"
        onClose={onClose}
      >
        <div className="h-screen px-4 text-center grid place-items-center select-none">
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
                onClick={onClose}
              >
                x
              </button>
              <Dialog.Title as="h3" className="text-2xl font-medium leading-6">
                {title}
              </Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Popup;
