"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { AdjustmentsHorizontalIcon, FunnelIcon, NoSymbolIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Chat = () => {
  return (
    <>
      <DefaultLayout>
        <div className="rounded-lg bg-white shadow-default">
          <div className="p-6">
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-8">
                <div>
                    <div className="mb-4">
                        <div className="flex items-center p-4 py-3 bg-[#E9EBED] rounded-t-lg">
                            <h4 className="text-lg text-black font-semibold">Messages</h4>
                            <div className="flex gap-2 items-center ml-auto">
                                <button className="w-8 h-8 text-center flex items-center bg-white justify-center rounded-lg"><FunnelIcon className="w-5 h-5 text-black" /></button>
                                <button className="w-8 h-8 text-center flex items-center bg-white justify-center rounded-lg"><AdjustmentsHorizontalIcon className="w-5 h-5 text-black" /></button>
                                <button className="w-8 h-8 text-center flex items-center bg-white justify-center rounded-lg"><NoSymbolIcon className="w-5 h-5 text-black" /></button>
                            </div>
                        </div>
                        <div className="p-4 py-3 bg-[#F8F9F9]">
                            <input type="text" placeholder="Type here for Search" name="search" id="search" className="text-base bg-transparent focus:outline-none" />
                        </div>
                    </div>

<ul className="flex gap-4 flex-col h-[calc(100vh-378px)] overflow-auto hide-scroll">
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
    <li className="border border-[#E2E2E2] p-4 py-2 rounded-lg flex items-center gap-3 hover:bg-primary100 transition-all cursor-pointer hover:border-primary100">
        <span className="w-14 min-w-14 h-14 rounded-full overflow-hidden ">
            <Image
            src='/images/avatar.jpg'
            width={56}
            height={56}
            />
        </span>
        <div className="w-full">
            <h5 className="text-black text-base font-semibold">Tom Moody</h5>
            <span className="block w-full text-sm text-slate-400">There are many variations</span>
            <span className="block w-full text-sm text-slate-400">5:00 PM</span>
        </div>
        <span className="bg-red text-sm rounded-full min-w-6 h-6 flex items-center justify-center text-white ml-auto">10</span>
    </li>
</ul>

                </div>
                <div className="col-span-3">chats</div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Chat;
