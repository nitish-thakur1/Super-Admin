import { Fragment, useRef, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import Image from "next/image";
import {
  ChatBubbleOvalLeftIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PhoneIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Prop {
  show: boolean;
  handleClose: () => void;
}

const DeleteRequestModal = ({ show, handleClose }: Prop) => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-gray-500 fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                  <div className="bg-white p-4 pt-5 pb-2 sm:pb-2 sm:p-6">
                    <div className="sm:flex sm:items-start">
                      <div className="w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-medium leading-6 text-black flex gap-3 items-center"
                        >
                         <ExclamationCircleIcon
                        className="min-w-7 h-7 w-7 text-red"
                        aria-hidden="true"
                    /> Sure you want to delete the request?

                          <button
                    type="button"
                    className="ml-auto flex justify-center rounded-full min-w-7 w-7 h-7 bg-[#E5E5E5] items-center text-sm font-semibold"
                    onClick={() => handleClose()}
                    ref={cancelButtonRef}
                  >
                    <XMarkIcon
                        className="h-5 w-5 text-[#4F4F4F]"
                        aria-hidden="true"
                    />
                  </button>
                        </Dialog.Title>
                        <div className="mt-2">
                        <span className="text-base text-slate-400 pl-10 block w-full">If you delete the request, you will be loose all data related to it.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 pb-6 sm:px-6 flex gap-3 justify-end">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-primary300 shadow-sm ring-1 ring-inset ring-primary300 hover:bg-gray-50 sm:mt-0 sm:w-auto items-center"
                    onClick={() => handleClose()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full bg-primary300 justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-500 sm:w-auto items-center"
                    onClick={() => handleClose()}
                  >
                   Confirm
                  </button>
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default DeleteRequestModal;
