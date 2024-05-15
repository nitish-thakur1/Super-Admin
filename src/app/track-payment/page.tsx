"use client";
import CardDataStats from "@/components/CardDataStats";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import "@/css/style.css";
import { ArrowDownLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PaymentFailedModal from "./payment-failed-modal";

const TrackPayment: React.FC = () => {

    
const [failedModal,setPaymentFailedModal,]=useState(false)

  return (
    <>


    <PaymentFailedModal show={failedModal} handleClose={()=>setPaymentFailedModal(false)}/>

      <DefaultLayout>

        <div className="mb-7 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats
            bgColorClass="firstBox"
            title="Escrow Balance"
            total="$3.456K"
          ></CardDataStats>
          <CardDataStats
            bgColorClass="secondBox"
            title="Total Earning"
            total="$45,2K"
          ></CardDataStats>
        </div>

        <div className="rounded-xl bg-white px-8 py-6 shadow-default">
          <div className="mb-5 flex flex-wrap gap-2">
            <h4 className="text-xl font-medium text-primary500 flex items-center">
             Track Payment
            </h4>
            <div className="md:ml-auto flex gap-4 xs:flex-wrap md:flex-nowrap">
              <select
                id="request-raised"
                className="focus:outline-0 border-[#7F7F80] text-[#7F7F80] block w-full rounded-full border py-2 font-semibold px-4 text-base"
              >
                <option selected>Status</option>
                <option value="1">Status 1</option>
                <option value="2">Status 2</option>
                <option value="3">Status 3</option>
                <option value="4">Status 4</option>
              </select>
              
              <div className="flex items-center border-[#7F7F80] text-[#7F7F80] rounded-full border py-2 font-semibold px-4 text-base">
                <input type="date" className="focus:outline-0" />
              </div>

            </div>
          </div>
          <table className="w-full table-fixed border-collapse text-base">
            <thead>
              <tr>
                <th className="p-4 text-left text-base font-medium text-black">
                  Title
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Amount ($)
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Date & Time
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Send to
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                    Received from
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                    Transaction ID
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-base">
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  <span className="cursor-pointer" onClick={()=>setPaymentFailedModal(true)}>Lorem ipsum dolor sit amet consectetur.</span>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  230
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  25.07.2018
                  <i className="block text-grey300">14:14:09</i>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  <span className="text-primary400">HulkSmash</span>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  <span className="text-primary400">--</span>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    TTCNI022000800594
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  <span className="cancelled">Failed</span>
                </td>
              </tr>
            
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
                </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <div className="flex items-center gap-2">230 <span className="text-red gap-1 font-bold flex items-center">Dr 
                <ArrowUpRightIcon
                    className="h-4 w-4 text-red"
                    aria-hidden="true"
                />
                </span></div>
              </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  25.07.2018
                  <i className="block text-grey300">14:14:09</i>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  <span className="text-primary400">HulkSmash</span>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  <span className="text-primary400">--</span>
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                    TTCNI022000800594
                </td>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  <span className="complete">Completed</span>
                </td>
              </tr>
            
            <tr>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                Lorem Ipsum is simply dummy text of the printing
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <div className="flex items-center gap-2">230 <span className="text-red gap-1 font-bold flex items-center">Dr 
                <ArrowUpRightIcon
                    className="h-4 w-4 text-red"
                    aria-hidden="true"
                />
                </span></div>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                25.07.2018
                <i className="block text-grey300">14:14:09</i>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">HulkSmash</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">--</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  TTCNI022000800594
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="complete">Completed</span>
              </td>
            </tr>
            
            <tr>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                Lorem Ipsum is simply dummy text of the printing
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <div className="flex items-center gap-2">230 <span className="text-red gap-1 font-bold flex items-center">Dr 
                <ArrowUpRightIcon
                    className="h-4 w-4 text-red"
                    aria-hidden="true"
                />
                </span></div>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                25.07.2018
                <i className="block text-grey300">14:14:09</i>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">HulkSmash</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">--</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  TTCNI022000800594
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="complete">Completed</span>
              </td>
            </tr>
            
            <tr>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                Lorem Ipsum is simply dummy text of the printing
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <div className="flex items-center gap-2">230 <span className="text-green-600 gap-1 font-bold flex items-center">Cr 
                <ArrowDownLeftIcon
                    className="h-4 w-4 text-green-600"
                    aria-hidden="true"
                />
                </span></div>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                25.07.2018
                <i className="block text-grey300">14:14:09</i>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">HulkSmash</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">--</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  TTCNI022000800594
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="complete">Completed</span>
              </td>
            </tr>
            
            <tr>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                Lorem Ipsum is simply dummy text of the printing
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <div className="flex items-center gap-2">230 <span className="text-green-600 gap-1 font-bold flex items-center">Cr 
                <ArrowDownLeftIcon
                    className="h-4 w-4 text-green-600"
                    aria-hidden="true"
                />
                </span></div>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                25.07.2018
                <i className="block text-grey300">14:14:09</i>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">HulkSmash</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="text-primary400">--</span>
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                  TTCNI022000800594
              </td>
              <td className="border-b border-dashed border-[#C8CFD9] p-4 text-[#696E76]">
                <span className="complete">Completed</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </DefaultLayout>
    </>
  );
};

export default TrackPayment;
