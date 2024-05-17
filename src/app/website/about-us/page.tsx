"use client";
import WebLayout from "@/components/Layouts/WebLayout";
import "@/css/style.css";
import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const AboutUs: React.FC = () => {
  return (
    <>
      <WebLayout>
        <section className="flex min-h-50 flex-col items-center justify-center bg-primary500 bg-[url('/images/website/inner-pattern.png')] bg-cover bg-no-repeat p-6 text-center">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            About Us
          </h1>
          <p className="mt-3 text-base text-primary200 lg:text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </section>

        <section className="px-0 py-6 text-[#696E76] lg:py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6 lg:gap-12">
              <div className="col-span-12 lg:col-span-5 mb-10 lg:mb-0">
                <div className="relative">
                  <span className="block w-11/12 overflow-hidden rounded-xl">
                    <img
                      src="/images/website/about-us-2.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <div className="absolute -bottom-8 right-0 bg-primary400 p-6 text-lg font-semibold text-white sm:text-xl lg:w-80 lg:text-3xl">
                    Faster than you can imagine{" "}
                    <div
                      className="absolute right-0 top-0 
                    rotate-[90deg] border-b-[32px]
                    border-l-[32px] border-t-[0]
                    border-b-transparent border-l-white border-t-transparent"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="mb-5 text-xl font-semibold text-grey500 lg:text-2xl xl:text-4xl">
                  Revolutionizing Access to Products{" "}
                  <span className="text-red">Across Borders</span>
                </div>
                <p className="text-base text-grey500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>

                <p className="mt-6 block w-full text-base text-[#696E76]">
                  Our mission is to break down barriers of accessibility and
                  make the world a smaller, more connected place. With Bring Me,
                  you can access any product, anywhere, and travelers can make
                  their journeys even more meaningful by helping others.
                </p>
                <p className="mt-3 block w-full text-base text-[#696E76]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, 
                </p>

                <ul className="mt-10 flex flex-col gap-4">
                  <li className="relative block w-full pl-8 text-base text-black">
                    <span className="absolute left-0 top-0.5">
                      <CheckBadgeIcon className="h-6 w-6 text-[#FE4239]" />
                    </span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </li>
                  <li className="relative block w-full pl-8 text-base text-black">
                    <span className="absolute left-0 top-0.5">
                      <CheckBadgeIcon className="h-6 w-6 text-[#FE4239]" />
                    </span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-0 py-6 bg-[#F8F9F9] lg:py-12 mt-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
                
              <div className="col-span-12 lg:col-span-6">
                <div className="mb-5 text-xl font-semibold text-grey500 lg:text-2xl xl:text-4xl">
                Why Choose {" "}
                  <span className="text-red">Bring Me</span>
                </div>
                <p className="text-base text-grey500">
                Our mission is to break down barriers of accessibility and make the world a smaller, more connected place. With Bring Me, you can access any product, anywhere, and travelers can make their journeys even more meaningful by helping others.
                </p>

                <p className="mt-6 block w-full text-base text-[#696E76]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </p>
                <p className="mt-3 block w-full text-base text-[#696E76]">
                Our mission is to break down barriers of accessibility and make the world a smaller, more connected place. With Bring Me, you can access any product, anywhere, and travelers can make their journeys even more meaningful by helping others.
                </p>
                <p className="mt-3 block w-full text-base text-[#696E76]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </p>

                <div className="flex flex-wrap gap-10 mt-5 lg:mt-10">
                    <div>
                        <h3 className="text-6xl text-primary500 font-bold">50 <span className="font-normal text-base text-secondary300">cities</span></h3>
                        <p className="text-grey500">Around the world</p>
                    </div>
                    <div>
                        <h3 className="text-6xl text-primary500 font-bold">2 <span className="font-normal text-base text-secondary300">millions</span></h3>
                        <p className="text-grey500">Delivery around the world</p>
                    </div>
                    <div>
                        <h3 className="text-6xl text-primary500 font-bold">1.2 <span className="font-normal text-base text-secondary300">millions</span></h3>
                        <p className="text-grey500">Around the world</p>
                    </div>
                </div>
                
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-6 lg mt-12">
                        <div className="p-6 rounded-lg bg-primary400 text-white shadow-default">
                            <Image
                            src='/images/website/globe.svg'
                            width={60}
                            height={60}
                            alt="globe"
                            className="mb-3"
                            />
                            <h5 className="text-lg mb-3">Lorem Ipsum is simply dummy </h5>
                            <p className="text-md font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-white mt-6 text-black shadow-default">
                            <Image
                            src='/images/website/savings.svg'
                            width={60}
                            height={60}
                            alt="savings"
                            className="mb-3 invert"
                            />
                            <h5 className="text-lg mb-3">Lorem Ipsum is simply dummy </h5>
                            <p className="text-md font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="p-6 rounded-lg bg-white text-black shadow-default">
                            <Image
                            src='/images/website/paid.svg'
                            width={60}
                            height={60}
                            alt="paid"
                            className="mb-3 invert"
                            />
                            <h5 className="text-lg mb-3">Lorem Ipsum is simply dummy </h5>
                            <p className="text-md font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-secondary300 mt-6 text-white shadow-default">
                            <Image
                            src='/images/website/add_reaction.svg'
                            width={60}
                            height={60}
                            alt="add_reaction"
                            className="mb-3"
                            />
                            <h5 className="text-lg mb-3">Lorem Ipsum is simply dummy </h5>
                            <p className="text-md font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="subscribe relative -bottom-12 mx-auto w-full lg:w-10/12">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-4 rounded-xl bg-primary100 p-4 px-6 shadow-default lg:flex-row lg:gap-10 lg:rounded-full">
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
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/facebook.svg"
                        width={12}
                        height={12}
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/telegram.svg"
                        width={12}
                        height={12}
                        alt="telegram"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/twitter.svg"
                        width={12}
                        height={12}
                        alt="twitter"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="flex h-10 w-10 items-center justify-center p-2"
                    >
                      <Image
                        className="h-full w-full"
                        src="/images/website/instagram.svg"
                        width={12}
                        height={12}
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
                  <Link href="/website/about-us" className="w-full text-base text-white">
                    About Us
                  </Link>
                  <Link href="#" className="w-full text-base text-white">
                    How It Works
                  </Link>
                  <Link href="/website/privacy-policy" className="w-full text-base text-white">
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
                <div className="mt-4 flex items-end gap-4">
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
                    className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-primary300 bg-primary300 p-3 px-8 font-medium text-white transition hover:bg-opacity-90"
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

export default AboutUs;
