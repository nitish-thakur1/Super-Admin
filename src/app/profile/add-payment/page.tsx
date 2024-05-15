"use client";
import { useState } from "react";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {
  BuildingLibraryIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const AddPayment = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <>
      <DefaultLayout>
        <div className="mb-8 rounded-lg bg-white shadow-default">
          <div className="border-b border-[#C8CFD9] p-4 px-6 text-lg font-semibold text-secondary500">
            <h3>Add Payment to Escrow </h3>
          </div>
          <div className="p-6 px-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <div className="box">
                <label
                  htmlFor="first-name"
                  className=" block text-base font-medium leading-6 text-black"
                >
                  Deposite Amount
                </label>
                <div className="mt-1">
                  <div className="ring-gray-300 relative mt-2 overflow-hidden rounded-md border border-[#E2E2E2] shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center bg-primary100 px-3">
                      <span className="text-base font-semibold text-black">
                        $
                      </span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="Enter amount"
                      className="rounded-md px-4 py-2 pl-10 focus:outline-none sm:text-base sm:leading-6"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="ml-0 flex gap-3 sm:ml-auto">
                <Image
                  src="/images/visa.svg"
                  width={50}
                  height={34}
                  alt="visa"
                />
                <Image
                  src="/images/master-card.svg"
                  width={50}
                  height={34}
                  alt="visa"
                />
                <Image
                  src="/images/american-express.svg"
                  width={50}
                  height={34}
                  alt="visa"
                />
              </div>
            </div>

            <div className="box mt-8">
              <label
                htmlFor="first-name"
                className=" block text-base font-medium leading-6 text-black"
              >
                Your Credit and Debit cards
              </label>
              <div className="mt-3">
                <div className="flex flex-wrap gap-5">
                  <div className="flex items-center rounded-lg bg-[#F8F9F9] p-4">
                    <label className="bg-gray-100 text-gray-700 my-3 flex cursor-pointer rounded-md px-3 py-2 pl-0 ">
                      <input type="radio" name="Country" className=" h-5 w-5" />
                    </label>
                    <div className="flex items-center gap-5">
                      <span className="rounded-lg border-2 border-primary500 p-4 py-2">
                        <Image
                          src={"/images/mastercard-logo.jpg"}
                          width={72}
                          height={44}
                          alt="card"
                        />
                      </span>
                      <div className="font-semibold text-black">
                        <span className="block">****1234 | Expires 06/27</span>
                        <span className="block">John Doe</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center rounded-lg bg-[#F8F9F9] p-4">
                    <label className="bg-gray-100 text-gray-700 my-3 flex cursor-pointer rounded-md px-3 py-2 ">
                      <input type="radio" name="Country" className="h-5 w-5" />
                    </label>

                    <div className="flex items-center gap-5">
                      <span className="rounded-lg border-2 border-primary500 p-4 py-2">
                        <Image
                          src={"/images/mastercard-logo.jpg"}
                          width={72}
                          height={44}
                          alt="card"
                        />
                      </span>
                      <div className="font-semibold text-black">
                        <span className="block">****1234 | Expires 06/27</span>
                        <span className="block">John Doe</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/"
                    className="flex flex-col items-center justify-center rounded-lg bg-[#F8F9F9] p-4"
                  >
                    <PlusCircleIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                    <h5 className="mt-1 font-semibold text-black ">
                      Add New Card
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow-default">
          <div className="p-6 px-6">
            <div className="mb-4 flex items-center gap-3 text-black">
              <h3 className="text-base font-semibold">
                Submit your Credit Card Details
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="box">
                <label
                  htmlFor="first-name"
                  className=" block text-base font-medium leading-6 text-black"
                >
                  Card Number
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="cardNumber"
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
                  Valid Thru
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="validThru"
                    placeholder="MM/YY"
                    className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                  ></input>
                </div>
              </div>
              <div className="box">
                <label
                  htmlFor="first-name"
                  className=" block text-base font-medium leading-6 text-black"
                >
                  Security Code (CVV)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="Code"
                    placeholder="CVV"
                    className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                  ></input>
                </div>
              </div>
              <div className="box">
                <label
                  htmlFor="first-name"
                  className=" block text-base font-medium leading-6 text-black"
                >
                  Cardholder Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="nameHolder"
                    placeholder="Enter Cardholder Name"
                    className="ring-gray-300 block w-full resize-none rounded-md border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                  ></input>
                </div>
              </div>
            </div>
            <label className="text-gray-500 mt-3 inline-block cursor-pointer font-medium">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-base">Save my card detail</span>
            </label>
          </div>
        </div>
        

        <div className="bg-gray-50 flex justify-end gap-3 py-6">
            <button
              type="button"
              className="hover:bg-gray-50 mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-base font-semibold text-primary300 shadow-sm ring-1 ring-inset ring-primary300 sm:mt-0 sm:w-auto"
            >
              Back
            </button>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-500 inline-flex w-full items-center justify-center rounded-full bg-primary300 px-4 py-2.5 text-base font-semibold text-white shadow-sm sm:w-auto"
            >
              Make Payment
            </button>
          </div>
      </DefaultLayout>
    </>
  );
};

export default AddPayment;
