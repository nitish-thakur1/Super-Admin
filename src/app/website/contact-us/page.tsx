"use client";
import WebLayout from "@/components/Layouts/WebLayout";
import "@/css/style.css";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactUs: React.FC = () => {
  return (
    <>
      <WebLayout>
        
        <section className="text-center p-6 bg-primary500 min-h-50 flex items-center justify-center flex-col">
            <h1 className="text-white text-lg lg:text-5xl font-bold">Contact Us</h1>
            <p className="text-primary200 text-lg mt-3">Any question or remarks? Just write us a message!</p>
        </section>

        <div className="subscribe relative -bottom-12 mx-auto w-full lg:w-10/12">
          <div className="container mx-auto">
            <div className="flex items-center flex-col lg:flex-row gap-4 lg:gap-10 rounded-xl lg:rounded-full bg-primary100 p-4 px-6 shadow-default">
              <h5 className="w-full text-base font-medium text-primary500">
                Subscribe to stay tuned for new updates and latest
                notifications. Let's do it!{" "}
              </h5>
              <div className="py- flex w-full gap-4 rounded-full bg-white p-2 pl-4 shadow-default">
                <input
                  type="text"
                  placeholder="Enter your Email Address"
                  className="w-full bg-transparent text-base text-black focus:outline-none"
                />
                <button
                  type="button"
                  value="Subscribe"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary300 bg-primary300 p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
                >
                  Subscribe
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="footer bg-[#37383C] pb-15 pt-21">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3">
                <Link className="block flex-shrink-0" href="/">
                  <Image
                    width={160}
                    height={64}
                    src={"/images/logo-white.svg"}
                    alt="logo-white"
                  />
                </Link>
                <p className="mt-3 text-base text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-white">
                    Follow Us
                  </h5>
                  <div className="mt-3 flex gap-0">
                    <Link
                      href="/"
                      className="flex h-12 w-12 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/facebook.svg"
                        width={22}
                        height={22}
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-12 w-12 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/telegram.svg"
                        width={22}
                        height={22}
                        alt="telegram"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-12 w-12 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/twitter.svg"
                        width={22}
                        height={22}
                        alt="twitter"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-12 w-12 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/instagram.svg"
                        width={24}
                        height={22}
                        alt="instagram"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                <h5 className="mb-6 mt-3 text-lg font-semibold text-white">
                  Quick Links
                </h5>
                <div className="flex flex-col flex-nowrap gap-3">
                  <Link href="#" className="w-full text-base text-white">
                    About Us
                  </Link>
                  <Link href="#" className="w-full text-base text-white">
                    How It Works
                  </Link>
                  <Link href="#" className="w-full text-base text-white">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <h5 className="mb-6 mt-3 text-lg font-semibold text-white">
                  Quick Links
                </h5>
                <div className="flex flex-col flex-nowrap gap-3">
                  <Link
                    href="#"
                    className="flex w-full items-center gap-2 text-base text-white"
                  >
                    <MapPinIcon className="h-5 w-5" /> Wisconsin Ave, Suite 700{" "}
                    <br />
                    Chevy Chase, Maryland 20815
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center gap-2 text-base text-white"
                  >
                    <DevicePhoneMobileIcon className="h-5 w-5" /> (415) 555‑0132
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center gap-2 text-base text-white"
                  >
                    <EnvelopeIcon className="h-5 w-5" /> bringMe@xyz.com
                  </Link>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <h5 className="mb-6 mt-3 text-lg font-semibold text-white">
                  Reach out to us
                </h5>
                <div className="flex gap-4">
                  <div className="box w-full">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-white"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Full Name"
                        className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <div className="box w-full">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-white"
                    >
                      Mobile
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Enter your Mobile Number"
                        className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 items-end">
                  <div className="box w-full">
                    <label
                      htmlFor="first-name"
                      className=" block text-base font-medium leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email Address"
                        className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="submit"
                    className="h-11 inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary300 bg-primary300 p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </WebLayout>
    </>
  );
};

export default ContactUs;
