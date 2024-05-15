"use client";
// import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const RatingReviews = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <DefaultLayout>
        <>
          <div className="mb-6 flex items-center gap-2 font-medium text-black">
            <h3 className="text-xl font-semibold">Rating & Reviews</h3>
          </div>

          <div className="px-6">
            <button
                className={`${index===0?'bg-white rounded-t-lg text-primary300':'bg-transparent text-black'} px-4 py-2`}
                onClick={() => setIndex(0)}
            >
                Received
            </button>
            <button
              className={`${index===1?'bg-white rounded-t-lg text-primary300':'bg-transparent text-black'} px-4 py-2`}
                onClick={() => setIndex(1)}
            >
                Given
            </button>
          </div>

          <div className="rounded-lg bg-white shadow-default p-6 px-6">
            <div className={`${index === 0 ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div><div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div><div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div><div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div>
            </div>
            </div>
            <div className={`${index === 1 ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div><div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div><div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div><div className="p-4 rounded-lg shadow-default border border-[#f3f3f3]">
                    <div className="flex gap-4 flex-wrap align-top">
                        <span className="w-18 h-18 min-w-18 rounded-full overflow-hidden inline-block">
                            <Image
                            width={70}
                            height={70}
                            alt="avatar"
                            src='/images/avatar.jpg'
                            className="rounded-full h-full w-full object-cover"
                            />
                        </span>
                        <div className="flex flex-1 gap-2 flex-wrap align-top">
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-black">John Doe</h4>
                                <span className="text-md text-slate-400">17 Apr 2024, 5:40pm</span>
                                <img src="/images/star-group.svg" className="" alt="" />
                            </div>
                            <button className="ml-auto flex align-top">
                                <InformationCircleIcon className="h-7 w-7 text-primary400" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-base font-semibold text-black">Lorem Ipsum is simply dummy text of the</h4>
                        <span className="text-base text-slate-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </span>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </>
      </DefaultLayout>
    </>
  );
};

export default RatingReviews;
