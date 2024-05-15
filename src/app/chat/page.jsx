"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { PaperClipIcon, PhotoIcon } from "@heroicons/react/24/outline";
import {
  AdjustmentsHorizontalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  NoSymbolIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Chat = () => {
  return (
    <>
      <DefaultLayout>
        <div className="rounded-lg bg-white shadow-default">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
              <div>
                <div className="mb-4">
                  <div className="flex items-center rounded-t-lg bg-[#E9EBED] p-4 py-3">
                    <h4 className="text-lg font-semibold text-black">
                      Messages
                    </h4>
                    <div className="ml-auto flex items-center gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-center">
                        <FunnelIcon className="h-5 w-5 text-black" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-center">
                        <AdjustmentsHorizontalIcon className="h-5 w-5 text-black" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-center">
                        <NoSymbolIcon className="h-5 w-5 text-black" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#F8F9F9] p-4 py-3">
                    <input
                      type="text"
                      placeholder="Type here for Search"
                      name="search"
                      id="search"
                      className="bg-transparent text-base focus:outline-none"
                    />
                  </div>
                </div>

                <ul className="hide-scroll flex h-[calc(100vh-378px)] flex-col gap-4 overflow-auto">
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E2E2E2] p-4 py-2 transition-all hover:border-primary100 hover:bg-primary100">
                    <span className="h-14 w-14 min-w-14 overflow-hidden rounded-full ">
                      <Image src="/images/avatar.jpg" width={56} height={56} />
                    </span>
                    <div className="w-full">
                      <h5 className="text-base font-semibold text-black">
                        Tom Moody
                      </h5>
                      <span className="block w-full text-sm text-slate-400">
                        There are many variations
                      </span>
                      <span className="block w-full text-sm text-slate-400">
                        5:00 PM
                      </span>
                    </div>
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-red text-sm text-white">
                      10
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-3">
                <div className="flex items-center gap-4 sm:gap-10 flex-wrap rounded-lg bg-[#E9EBED] p-4 py-3">
                    <div className="flex items-center gap-4 flex-wrap">
                        <span>
                            <Image
                            src='/images/avatar.jpg'
                            alt="avatar"
                            width={50}
                            height={50}
                            />
                        </span>
                        <div>
                            <h5 className="text-black font-semibold">Tom Moody</h5>
                            <span className="text-sm">Active</span>
                        </div>
                    </div>
                    <h4 className="flex-1 text-md text-primary400">I need to have my parcel delivered from Costa Rica to San Jose.</h4>
                    <div className="flex items-center">
                        <button className="bg-transparent">
                        <MagnifyingGlassIcon
                              className="h-6 w-6 text-black"
                              aria-hidden="true"
                        />
                        </button>
                    </div>
                </div>

	<div className="mt-4 flex flex-col flex-grow w-full bg-white overflow-hidden">
		<div className="flex flex-col flex-grow h-[calc(100vh-420px)] p-4 overflow-auto hide-scroll">
			<div className="flex w-full mt-2 space-x-3 max-w-xl">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
				<div>
					<div className="bg-grey100 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end">
				<div>
					<div className="bg-primary100 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
                    <div className="flex w-full mt-2 justify-end">
                    <div>
                        <div className="bg-primary100 text-white p-3 rounded-l-lg rounded-br-lg">
                            <p className="text-base text-black">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
			    </div>
				</div>                
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
				<div>
					<div className="bg-grey100 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end">
				<div>
					<div className="bg-primary100 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end">
				<div>
					<div className="bg-primary100 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end">
				<div>
					<div className="bg-primary100 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
				<div>
					<div className="bg-grey100 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end">
				<div>
					<div className="bg-primary100 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-base text-black">Lorem ipsum dolor sit.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-grey100"></div>
			</div>
		</div>
		
		<div className="flex gap-4 p-4 pb-0 px-0">
			<div className="relative border border-[#E2E2E2] rounded-lg w-full flex">
                <input className="flex text-black items-center h-full w-full rounded-lg px-3 text-base focus:outline-none" type="text" placeholder="Write your message"/>
                <button className="bg-transparent px-3">
                    <PaperClipIcon
                            className="h-6 w-6 text-black -rotate-45"
                            aria-hidden="true"
                    />
                </button>
                <button className="bg-transparent px-3">
                    <PhotoIcon
                            className="h-6 w-6 text-black"
                            aria-hidden="true"
                    />
                </button>
            </div>
            <button className="bg-[#56C0E8] p-4 rounded-lg">
            <PaperAirplaneIcon
                    className="h-6 w-6 text-white -rotate-45"
                    aria-hidden="true"
            />
            </button>
		</div>
	</div>

              </div>
            
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Chat;
