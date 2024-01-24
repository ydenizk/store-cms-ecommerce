"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

 const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black opacity-50"></div>

        <div className="fixed   inset-0 overflow-y-auto flex justify-center items-center">
          <div className="flex  min-h-full w-96 sm:w-[480px] items-center justify-center p-4 text-center  ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-95"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle ">
                <div className="relative flex w-full items-center overflow-hidden bg-gray-100 px-4 pb-8 pt-14 shadow-2xl  ">
                  <div className="absolute right-4 top-4">
                    <button className="text-xl" onClick={onClose}>
                      <X size={15} />
                    </button>
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal
