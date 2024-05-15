"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import "@/css/style.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon, EnvelopeIcon, HandRaisedIcon, PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from 'react'
import RequestModal from "./request-modal";
import VerifyCompletion from "./verify-completion";
import ListingViewModal from "./listing-view-modal";
import DeleteRequestModal from "./delete-request-modal";
import CancelRequestModal from "./cancel-request-modal";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const MyListing: React.FC = () => {
const [showModal,setShowModal,]=useState(false)
const [verifyCompletionModal,setVerifyCompletionModal]=useState(false)
const [viewModal,setViewModal,]=useState(false)
const [deleteModal,setDeleteModal,]=useState(false)
const [cancelModal,setCancelModal,]=useState(false)



  return (
    <>

<RequestModal show={showModal} handleClose={()=>setShowModal(false)}/>
<VerifyCompletion show={verifyCompletionModal} handleClose={()=>setVerifyCompletionModal(false)}/>
<ListingViewModal show={viewModal} handleClose={()=>setViewModal(false)}/>
<DeleteRequestModal show={deleteModal} handleClose={()=>setDeleteModal(false)}/>
<CancelRequestModal show={cancelModal} handleClose={()=>setCancelModal(false)}/>



      <DefaultLayout>
        <div className="mb-6 flex items-center gap-2 font-medium text-black">
          <h3 className="text-xl font-semibold">My Listing</h3>
          <Link
            href="/my-listing/add-task"
            className="ml-auto rounded-full bg-primary300 transition-all px-4 py-2 text-white hover:bg-primary400"
          >
            Create Task Request
          </Link>
        </div>

        <div className="rounded-xl bg-white px-8 py-6 shadow-default">
          <div className="mb-5 flex flex-wrap gap-2">
            <h4 className="flex items-center text-xl font-medium text-primary500">
              Raised Request List
            </h4>
            <div className="xs:flex-wrap flex gap-4 md:ml-auto md:flex-nowrap">
              <div className="flex items-center rounded-full border border-[#7F7F80] px-4 py-2 text-base font-semibold text-[#7F7F80]">
                <input
                  type="text"
                  placeholder="Search by title"
                  className="focus:outline-0"
                />
              </div>

              <select
                id="status"
                className="block w-full rounded-full border border-[#7F7F80] px-4 py-2 text-base font-semibold text-[#7F7F80] focus:outline-0"
              >
                <option selected>Status</option>
                <option value="1">Status 1</option>
                <option value="2">Status 2</option>
                <option value="3">Status 3</option>
                <option value="4">Status 4</option>
              </select>

              <div className="flex items-center rounded-full border border-[#7F7F80] px-4 py-2 text-base font-semibold text-[#7F7F80]">
                <input type="date" className="focus:outline-0" />
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="border-collapse text-base">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-basefont-medium w-20 p-4 text-left text-black"
                  >
                    <input type="checkbox" /> All
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium w-90 p-4 text-left text-black"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium whitespace-nowrap p-4 text-left text-black"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium whitespace-nowrap p-4 text-left text-black"
                  >
                    Amount ($)
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium whitespace-nowrap p-4 text-left text-black"
                  >
                    Date & Time
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium whitespace-nowrap p-4 text-left text-black"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium whitespace-nowrap p-4 text-left text-black"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-basefont-medium whitespace-nowrap p-4 text-left text-black"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-base">
                <tr>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <input type="checkbox" />
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <div className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={"/images/spark-plug.png"}
                        alt="spark-plug"
                      />
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Spark Plug
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    230
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    25.07.2018
                    <i className="block text-grey300">14:14:09</i>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Costa Rica
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <span className="progress">In progress</span>
                    <button
                      onClick={()=>setVerifyCompletionModal(true)}
                      className="mt-2 inline-block rounded-full bg-primary300 p-1 px-4 text-white hover:bg-primary400"
                    >
                      Verify Completion
                    </button>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold">
                          
                          <EllipsisVerticalIcon
                            className="text-gray-400 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-grey100 rounded-md bg-white shadow-lg focus:outline-none">
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <PencilIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <EnvelopeIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Chat
                                </Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={()=>setViewModal(true)}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                 <HandRaisedIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                 View</button>
                              )}
                            </Menu.Item>
                            </div>
                            
                            <div className="block">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={()=>setCancelModal(true)}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex gap-1 items-center px-4 py-2 text-md",
                                      )}
                                    >
                                     <XMarkIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                     Cancel</button>
                                  )}
                                </Menu.Item>
                                </div>
                            
                        <div className="block">
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button                                  
                                  onClick={()=>setDeleteModal(true)}
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex gap-1 items-center w-full px-4 py-2 text-left text-md",
                                    )}
                                  >
                                  <TrashIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                            </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <input type="checkbox" />
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <div className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={"/images/spark-plug.png"}
                        alt="spark-plug"
                      />
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Spark Plug
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    230
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    25.07.2018
                    <i className="block text-grey300">14:14:09</i>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Costa Rica
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <span className="open">Approval Pending</span>
                    <span className="request underline text-secondary500 cursor-pointer" onClick={()=>setShowModal(true)}>2 New Requests</span>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold">
                          
                          <EllipsisVerticalIcon
                            className="text-gray-400 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-grey100 rounded-md bg-white shadow-lg focus:outline-none">
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <PencilIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <EnvelopeIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Chat
                                </Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                 <HandRaisedIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                 View</Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex gap-1 items-center w-full px-4 py-2 text-left text-md",
                                    )}
                                  >
                                  <TrashIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                            </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <input type="checkbox" />
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <div className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={"/images/spark-plug.png"}
                        alt="spark-plug"
                      />
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Spark Plug
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    230
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    25.07.2018
                    <i className="block text-grey300">14:14:09</i>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Costa Rica
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <span className="complete">Complete</span>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold">
                          
                          <EllipsisVerticalIcon
                            className="text-gray-400 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-grey100 rounded-md bg-white shadow-lg focus:outline-none">
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <PencilIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <EnvelopeIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Chat
                                </Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                 <HandRaisedIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                 View</Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex gap-1 items-center w-full px-4 py-2 text-left text-md",
                                    )}
                                  >
                                  <TrashIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                            </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <input type="checkbox" />
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <div className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={"/images/spark-plug.png"}
                        alt="spark-plug"
                      />
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Spark Plug
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    230
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    25.07.2018
                    <i className="block text-grey300">14:14:09</i>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Costa Rica
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <span className="progress">In progress</span>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold">
                          
                          <EllipsisVerticalIcon
                            className="text-gray-400 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-grey100 rounded-md bg-white shadow-lg focus:outline-none">
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <PencilIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <EnvelopeIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Chat
                                </Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                 <HandRaisedIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                 View</Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex gap-1 items-center w-full px-4 py-2 text-left text-md",
                                    )}
                                  >
                                  <TrashIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                            </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <input type="checkbox" />
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <div className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={"/images/spark-plug.png"}
                        alt="spark-plug"
                      />
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Spark Plug
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    230
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    25.07.2018
                    <i className="block text-grey300">14:14:09</i>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Costa Rica
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <span className="open">Open</span>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold">
                          
                          <EllipsisVerticalIcon
                            className="text-gray-400 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-grey100 rounded-md bg-white shadow-lg focus:outline-none">
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <PencilIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <EnvelopeIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Chat
                                </Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                 <HandRaisedIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                 View</Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex gap-1 items-center w-full px-4 py-2 text-left text-md",
                                    )}
                                  >
                                  <TrashIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                            </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <input type="checkbox" />
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                    <div className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={"/images/spark-plug.png"}
                        alt="spark-plug"
                      />
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Spark Plug
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    230
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    25.07.2018
                    <i className="block text-grey300">14:14:09</i>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    Costa Rica
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <span className="cancelled">Cancelled</span>
                  </td>
                  <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold">
                          
                          <EllipsisVerticalIcon
                            className="text-gray-400 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-grey100 rounded-md bg-white shadow-lg focus:outline-none">
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <PencilIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                <EnvelopeIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                  Chat
                                </Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "flex gap-1 items-center px-4 py-2 text-md",
                                  )}
                                >
                                 <HandRaisedIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                 View</Link>
                              )}
                            </Menu.Item>
                            </div>
                            
                        <div className="block">
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex gap-1 items-center w-full px-4 py-2 text-left text-md",
                                    )}
                                  >
                                  <TrashIcon className="text-black h-4 w-4" aria-hidden="true"/>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                            </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default MyListing;
