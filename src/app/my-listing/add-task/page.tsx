"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import "@/css/style.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  EnvelopeIcon,
  HandRaisedIcon,
  PencilIcon,
  PhotoIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const AddTask: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [verifyCompletionModal, setVerifyCompletionModal] = useState(false);

  return (
    <>
      <DefaultLayout>
        <div className="rounded-lg bg-white shadow-default">
          <div className="border-b border-[#C8CFD9] p-4 px-6 text-lg font-semibold text-secondary500">
            <h3>Add a New Task Request</h3>
          </div>
          <div className="p-6 px-6">
            <form>
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="box">
                    <label
                      htmlFor="country"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      What country is the item purchased
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className=" ring-gray-300 block w-full rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      >
                        <option value="0">Select country</option>
                        <option value="1">Canada</option>
                        <option value="2">Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Select category
                    </label>
                    <div className="mt-1">
                      <select
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        className=" ring-gray-300 block w-full rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      >
                        <option value="0">Select category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Description of the item
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="description"
                        id=""
                        placeholder="Type description of your request"
                        className="ring-gray-300 block min-h-22 w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></textarea>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Size or Specifications
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="Specifications"
                        id=""
                        placeholder="Type description of your request"
                        className="ring-gray-300 block min-h-22 w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></textarea>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Preferred Brand
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="PreferredBrand"
                        id=""
                        placeholder="Type description of your request"
                        className="ring-gray-300 block min-h-22 w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></textarea>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Color or Style Preferences
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="Preferences"
                        id=""
                        placeholder="Type description of your request"
                        className="ring-gray-300 block min-h-22 w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></textarea>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Weight of the item
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="Preferences"
                        placeholder="Enter in Kilograms"
                        className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Where to Buy
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="Buy"
                        id=""
                        placeholder="Type description of your request"
                        className="ring-gray-300 block min-h-22 w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></textarea>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        placeholder="Type  title of your request"
                        className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Date you are making the request
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="dateTime"
                        // placeholder="Type  title of your request"
                        className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Price of the item
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="priceItem"
                        placeholder="Enter the value of the product"
                        className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Add amount of task
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="amountTask"
                        placeholder="Enter the value of the task"
                        className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="amountTotal"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Total Amount
                    </label>
                    <div className="mt-1">
                      <h3 className="text-2xl font-semibold text-black">$560</h3>
                    </div>
                  </div>

                  <div className="box">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Link of the item
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="location"
                        placeholder="Choose pickup location"
                        className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <div className="box">
                    <label
                      htmlFor="DropLocation"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      How do you want to receive your item
                    </label>
                    <div className="mt-1">
                      <select
                        id="DropLocation"
                        name="DropLocation"
                        autoComplete="DropLocation-name"
                        className=" ring-gray-300 block w-full rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      >
                        <option value="0">Choose Drop Location</option>
                        <option value="1">Location 1</option>
                        <option value="2">Location 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="Upload"
                      className=" block text-base font-medium leading-6 text-black"
                    >
                      Upload File
                    </label>
                    <div className="ring-gray-300 mt-1 flex w-full justify-center rounded-md border border-[#E2E2E2] px-4 py-4 focus:outline-none sm:text-base sm:leading-6">
                      <div className="text-center">
                        <PhotoIcon
                          className="text-gray-300 mx-auto h-12 w-12"
                          aria-hidden="true"
                        />
                        <div className="text-gray-600 flex text-sm leading-6">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none"
                          >
                            <span>Drop your files here</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-gray-600 text-sm leading-5">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="ml-auto rounded-full bg-primary300 hover:bg-primary400 px-4 py-2 text-white hover:bg-primary400"
                >
                  Save & continue to checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default AddTask;
