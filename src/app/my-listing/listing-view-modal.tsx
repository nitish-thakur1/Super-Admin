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

const ListingViewModal = ({ show, handleClose }: Prop) => {
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full">
                      <Dialog.Title as="h3" className="">
                        <div className="relative">
                          <img src="/images/spark-plug-banner.jpg" className="w-full" alt="" />
                          <button
                            type="button"
                            className="absolute right-3 z-1 top-3 flex justify-center rounded-full w-7 h-7 bg-white items-center text-sm font-semibold"
                            onClick={() => handleClose()}
                            ref={cancelButtonRef}
                          >
                            <XMarkIcon
                              className="h-6 w-6 text-black"
                              aria-hidden="true"
                            />
                          </button>

<span className="complete !inline-block !absolute bottom-5 right-3 z-1 rounded-lg bg-white p-2 px-4 !pl-9">Completed</span>

                        </div>
                      </Dialog.Title>
                      <div className="bg-white p-4 pt-5 sm:p-6">
                        <h4 className="mb-4 flex align-baseline text-lg font-semibold text-black">
                          Lorem Ipsum is simply dummy text of the
                          <span className="ml-auto text-nowrap py-[3px] text-sm text-[#696E76]">
                            Date: 25 Apr 2024
                          </span>
                        </h4>
                        <div>
                          <h4 className="text-md mb-1 font-semibold text-black">
                            Product Description
                          </h4>
                          <p className="text-md text-[#696E76]">
                            Lorem Ipsum is simply dummy text of the printing.
                            Lorem Ipsum is simply dummy text of the printing.
                          </p>
                        </div>

                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 sm:gap-x-20 mt-5">
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Product Name</span>
                            <span className="ml-auto text-black font-semibold">Spark Plug</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Task accepted by</span>
                            <span className="ml-auto text-black font-semibold">John Doe</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Product Value</span>
                            <span className="ml-auto text-black font-semibold">$ 200</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Phone Number</span>
                            <span className="ml-auto text-black font-semibold">1234567890</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Task Value</span>
                            <span className="ml-auto text-black font-semibold">$ 45</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Pickup Date</span>
                            <span className="ml-auto text-black font-semibold">28 Apr 2024</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Pickup</span>
                            <span className="ml-auto text-black font-semibold">Costa Rica</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Drop Date</span>
                            <span className="ml-auto text-black font-semibold">1 May 2024</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-[#696E76]">Drop Location</span>
                            <span className="ml-auto text-black font-semibold">Heredia</span>
                          </li>
                        </ul>

                      </div>
                    </div>
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
export default ListingViewModal;
