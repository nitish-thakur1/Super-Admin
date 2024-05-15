"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { CheckCircleIcon, HandRaisedIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
const Notification = () => {
  return (
    <>
      <DefaultLayout>
        <div className="mb-8 rounded-lg bg-white shadow-default">
          <div className="border-b border-[#C8CFD9] p-4 px-6 text-lg font-semibold text-secondary500">
            <h3>Notifications</h3>
          </div>
          <div className="p-4 px-6">
            <div className="flex flex-wrap gap-3 p-4 px-6 border rounded-lg border-[#EAECF0] bg-[#F7F4FA] shadow-1 mb-4">
                <span className="w-13 min-w-13 h-13 rounded-full overflow-hidden flex items-center justify-center bg-primary200">
                    <HandRaisedIcon className="text-black w-6 h-6"/>
                </span>
                <div>
                    <h4 className="text-black font-semibold">New request raised by Ssm004</h4>
                    <span className="block w-full text-base text-slate-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                <button className="ml-auto p-0">
                    <XMarkIcon className="text-black w-6 h-6"/>
                </button>
            </div>
            <div className="flex flex-wrap gap-3 p-4 px-6 border rounded-lg border-[#EAECF0] bg-[#F7F4FA] shadow-1 mb-4">
                <span className="w-13 min-w-13 h-13 rounded-full overflow-hidden flex items-center justify-center bg-green-700">
                    <CheckCircleIcon className="text-white w-6 h-6"/>
                </span>
                <div>
                    <h4 className="text-black font-semibold">Your Request is accepted by someone</h4>
                    <span className="block w-full text-base text-slate-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                <button className="ml-auto p-0">
                    <XMarkIcon className="text-black w-6 h-6"/>
                </button>
            </div>
            <div className="flex flex-wrap gap-3 p-4 px-6 border rounded-lg border-[#EAECF0] bg-[#F7F4FA] shadow-1 mb-4">
                <span className="w-13 min-w-13 h-13 rounded-full overflow-hidden flex items-center justify-center bg-red">
                    <XCircleIcon className="text-white w-6 h-6"/>
                </span>
                <div>
                    <h4 className="text-black font-semibold">Your Request cancelled someone</h4>
                    <span className="block w-full text-base text-slate-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                <button className="ml-auto p-0">
                    <XMarkIcon className="text-black w-6 h-6"/>
                </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Notification;
