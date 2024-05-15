import { Fragment, useRef, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import Image from "next/image";
import {
  ChatBubbleOvalLeftIcon,
  CheckCircleIcon,
  PhoneIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Prop {
  show: boolean;
  handleClose: () => void;
}

const RequestModal = ({ show, handleClose }: Prop) => {
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white p-4 pt-5 sm:p-6">
                    <div className="sm:flex sm:items-start">
                      <div className="w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-semibold leading-6 text-black flex items-center border-b pb-4 border-[#C8CFD9]"
                        >
                          Job Request list

                          <button
                    type="button"
                    className="ml-auto justify-center rounded-md bg-white px-2 text-sm font-semibold"
                    onClick={() => handleClose()}
                    ref={cancelButtonRef}
                  >
                    <XMarkIcon
                        className="h-6 w-6 text-black"
                        aria-hidden="true"
                    />
                  </button>
                        </Dialog.Title>
                        <div className="mt-4">
                          <table className="border-collapse text-base">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  className="text-basefont-medium py-1 text-left text-black"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="text-basefont-medium py-1 text-left text-black"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white text-base">
                              <tr>
                                <td className="border-b border-dashed border-[#C8CFD9] py-2 text-primary500">
                                  <div className="flex items-center gap-4">
                                    <Image
                                      width={50}
                                      height={50}
                                      src={"/images/spark-plug.png"}
                                      alt="spark-plug"
                                    />
                                    <div className="flex flex-col">
                                      <h5 className="m-0">Mark Jacob</h5>
                                      <span className="flex items-center gap-1 text-black">
                                        {" "}
                                        <PhoneIcon
                                          className="h-4 w-4 text-black"
                                          aria-hidden="true"
                                        />
                                        999125465
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="border-b border-dashed border-[#C8CFD9] py-2 text-primary500">
                                  <div className="flex gap-1">
                                    <button className="inline-block">
                                      <CheckCircleIcon
                                        className="h-7 w-7 text-green-700"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button className="inline-block">
                                      <XCircleIcon
                                        className="h-7 w-7 text-rose-600"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button className="inline-block">
                                      <ChatBubbleOvalLeftIcon
                                        className="h-7 w-7 text-primary300"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border-b border-dashed border-[#C8CFD9] py-2 text-primary500">
                                  <div className="flex items-center gap-4">
                                    <Image
                                      width={50}
                                      height={50}
                                      src={"/images/spark-plug.png"}
                                      alt="spark-plug"
                                    />
                                    <div className="flex flex-col">
                                      <h5 className="m-0">Mark Jacob</h5>
                                      <span className="flex items-center gap-1 text-black">
                                        {" "}
                                        <PhoneIcon
                                          className="h-4 w-4 text-black"
                                          aria-hidden="true"
                                        />
                                        999125465
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="border-b border-dashed border-[#C8CFD9] py-2 text-primary500">
                                  <div className="flex gap-1">
                                    <button className="inline-block">
                                      <CheckCircleIcon
                                        className="h-7 w-7 text-green-700"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button className="inline-block">
                                      <XCircleIcon
                                        className="h-7 w-7 text-rose-600"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button className="inline-block">
                                      <ChatBubbleOvalLeftIcon
                                        className="h-7 w-7 text-primary300"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full bg-blue-400 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => handleClose()}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => handleClose()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default RequestModal;
