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
import FeedbackModal from "./feedback-modal";

interface Prop {
  show: boolean;
  handleClose: () => void;
}

const VerifyCompletion = ({ show, handleClose }: Prop) => {
  const [open, setOpen] = useState(true);
  
const [feedbackModal,shareFeedback,]=useState(false)

  const cancelButtonRef = useRef(null);
  const handleModalOpen=()=>{
    shareFeedback(true)
    handleClose()
  }
  return (
    <>

<FeedbackModal show={feedbackModal} handleClose={()=>shareFeedback(false)}/>

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
                          Verify Completion
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
                          <div className="flex gap-4 items-center">
                            <Image
                                width={60}
                                height={60}
                                src={"/images/avatar.jpg"}
                                alt="avatar"
                                className="rounded-lg overflow-hidden"
                            />
                            <div className="flex text-base text-black flex-col">
                                <h3 className="font-semibold">John has marked the job completed </h3>
                                <span className="text-sm">Date: 25 Apr 2024. 08:30PM</span>
                            </div>
                          </div>

                          <div className="mt-8 flex gap-4 items-center border border-[#C8CFD9] p-3 rounded-lg">
                            <Image
                                width={38}
                                height={38}
                                src={"/images/spark-plug.png"}
                                alt="spark-plug"
                                className="rounded-lg overflow-hidden"
                            />
                            <div className="flex text-base text-black flex-col">
                                <h3 className="font-semibold">Product Description</h3>
                                <span className="text-sm text-slate-400">Lorem Ipsum is simply dummy text of the printing. </span>
                            </div>
                          </div>

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
                    Not Complete 
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full bg-primary300 hover:bg-primary400 justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto items-center"
                    onClick={() => handleModalOpen()}
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
export default VerifyCompletion;
