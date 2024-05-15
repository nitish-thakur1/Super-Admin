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

const AddBankAccountModal = ({ show, handleClose }: Prop) => {
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full">
                      <div className="border-b border-[#C8CFD9] p-4 ">
                        <Dialog.Title
                          as="h3"
                          className="flex items-center gap-3 text-xl font-semibold leading-6 text-black"
                        >
                          {" "}
                          Add Bank Account
                          <button
                            type="button"
                            className="ml-auto flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#E5E5E5] text-sm font-semibold"
                            onClick={() => handleClose()}
                            ref={cancelButtonRef}
                          >
                            <XMarkIcon
                              className="h-5 w-5 text-[#4F4F4F]"
                              aria-hidden="true"
                            />
                          </button>
                        </Dialog.Title>
                      </div>

                      <div className="bg-white p-4 pb-2 pt-5 sm:p-6 sm:pb-2">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="box">
                            <label
                              htmlFor="first-name"
                              className=" block text-base font-medium leading-6 text-black"
                            >
                              Account number
                            </label>
                            <div className="mt-1">
                              <input
                                type="number"
                                name="accountName"
                                placeholder="Enter your account number"
                                className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                              ></input>
                            </div>
                          </div>
                          <div className="box">
                            <label
                              htmlFor="first-name"
                              className=" block text-base font-medium leading-6 text-black"
                            >
                              Branch code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="branchNumber"
                                placeholder="Enter your branch code"
                                className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                              ></input>
                            </div>
                          </div>
                          <div className="box">
                            <label
                              htmlFor="first-name"
                              className=" block text-base font-medium leading-6 text-black"
                            >
                              IFSC Code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="IFSCNumber"
                                placeholder="Enter IFSC code number"
                                className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                              ></input>
                            </div>
                          </div>
                          <div className="box">
                            <label
                              htmlFor="first-name"
                              className=" block text-base font-medium leading-6 text-black"
                            >
                              Account Holder Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="name"
                                name="holderName"
                                placeholder="Enter your name"
                                className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex justify-end gap-3 px-4 py-3 pb-6 sm:px-6">
                    <button
                      type="button"
                      className="bg-red-600 hover:bg-red-500 inline-flex w-full items-center justify-center rounded-full bg-primary300 px-4 py-2.5 text-sm font-semibold text-white shadow-sm sm:w-auto"
                      onClick={() => handleClose()}
                    >
                      Update
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
export default AddBankAccountModal;
