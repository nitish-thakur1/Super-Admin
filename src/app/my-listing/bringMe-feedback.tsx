import { Fragment, useRef, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import { Rating } from "react-simple-star-rating";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Prop {
  show: boolean;
  handleClose: () => void;
}

const BringMeFeedbackModal = ({ show, handleClose }: Prop) => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

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
                  <div className="bg-white p-4 pt-5 sm:p-6 sm:pt-12">
                    <div className="sm:flex sm:items-start">
                      <div className="w-full">
                        <Dialog.Title
                          as="h3"
                          className="pb-1 text-center text-3xl font-semibold leading-8 text-black"
                        >
                          Rate BringME
                          <button
                            type="button"
                            className="absolute right-3 top-3 flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#E5E5E5] text-sm font-semibold shadow-default"
                            onClick={() => handleClose()}
                            ref={cancelButtonRef}
                          >
                            <XMarkIcon
                              className="h-6 w-6 text-black"
                              aria-hidden="true"
                            />
                          </button>
                        </Dialog.Title>
                        <div className="text-center">
                          <span className="block text-base text-slate-400">
                            Please rate your experience below
                          </span>

                          <Rating
                            className="ratingView mt-4"
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            /* Available Props */
                          />

                          <div className="text-left mt-5 sm:mt-8">
                            <label
                              htmlFor="first-name"
                              className=" block text-base font-medium leading-6 text-black"
                            >
                              Additional feedback
                            </label>
                            <div className="mt-1">
                              <textarea
                                name="message"
                                id=""
                                placeholder="Enter your message"
                                className="ring-gray-300 block min-h-22 w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex justify-end gap-3 px-4 py-3 pb-6 sm:px-6">
                    <button
                      type="button"
                      className="hover:bg-gray-50 mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary300 shadow-sm ring-1 ring-inset ring-primary300 sm:mt-0 sm:w-auto"
                      onClick={() => handleClose()}
                      ref={cancelButtonRef}
                    >
                      Skip
                    </button>
                    <button
                      type="button"
                      className="bg-red-600 hover:bg-red-500 inline-flex w-full items-center justify-center rounded-full bg-primary300 hover:bg-primary400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm sm:w-auto"
                      onClick={() => handleClose()}
                    >
                      Submit Feedback
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
export default BringMeFeedbackModal;
