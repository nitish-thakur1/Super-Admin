"use client";
import CardDataStats from "@/components/CardDataStats";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import "@/css/style.css";
import React from "react";

const Dashobard: React.FC = () => {
  return (
    <>
      <DefaultLayout>

        <div className="text-black text-4xl font-extrabold mb-6">
          Welcome Johns
        </div>

        <div className="mb-7 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats
            bgColorClass="firstBox"
            title="Total Earning"
            total="$3.456K"
          ></CardDataStats>
          <CardDataStats
            bgColorClass="secondBox"
            title="Total Profit"
            total="$45,2K"
          ></CardDataStats>
          <CardDataStats
            bgColorClass="thirdBox"
            title="Total Product"
            total="2.450"
          ></CardDataStats>
        </div>

        <div className="rounded-xl bg-white px-8 py-6 shadow-default">
          <div className="mb-5 flex flex-wrap gap-2">
            <h4 className="text-xl font-medium text-primary500 flex items-center">
              All Active Listing
            </h4>
            <div className="md:ml-auto flex gap-4 xs:flex-wrap md:flex-nowrap">
              <select
                id="request-raised"
                className="focus:outline-0 border-[#7F7F80] text-[#7F7F80] block w-full rounded-full border py-2 font-semibold px-4 text-base"
              >
                <option selected>Request raised</option>
                <option value="1">Request 1</option>
                <option value="2">Request 2</option>
                <option value="3">Request 3</option>
                <option value="4">Request 4</option>
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
                  Product
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Amount ($)
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Date & Time
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Location
                </th>
                <th className="text-basefont-medium p-4 text-left text-black">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-base">
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
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
              </tr>
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
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
              </tr>
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
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
              </tr>
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
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
              </tr>
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
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
              </tr>
              <tr>
                <td className="border-b border-dashed border-[#C8CFD9] p-4 text-primary500">
                  Lorem Ipsum is simply dummy text of the printing
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
              </tr>
            </tbody>
          </table>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Dashobard;
