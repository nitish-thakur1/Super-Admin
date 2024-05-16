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

const Home: React.FC = () => {
  return (
    <>
      <WebLayout>
        <section className="banner grid grid-cols-6 md:h-125 lg:h-150 xl:h-171.5">
          <div className="lg:15 relative col-span-6 flex h-full flex-col justify-center overflow-hidden bg-[#026671] p-5 py-10 pb-22 md:col-span-3 xl:p-18">
            <img
              src="/images/website/pattern-banner.png"
              alt="pattern-banner"
              className="absolute left-0 z-1 h-full w-full object-cover"
            />

            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              spaceBetween={20}
              autoplay={true}
            >
              <SwiperSlide>
                <span className="mb-2 block text-lg text-primary200">
                  Smart Delivery Service{" "}
                </span>
                <h1 className="text-3xl font-semibold text-white md:text-3xl lg:text-4xl xl:text-5xl">
                  Delivery anywhere, anytime, anyone
                </h1>
                <p className="mt-4 text-base text-white lg:text-lg xl:text-xl">
                  Join us in redefining accessibility and embracing the power of
                  community and connection.
                </p>
                <div className="mt-6 flex gap-2 pb-20">
                  <button className="rounded-full bg-primary300 px-6 py-3 text-base text-white transition hover:bg-opacity-90">
                    Join Us Now
                  </button>
                  <button className="flex items-center gap-2 rounded-full bg-transparent px-4 py-3 text-base text-white">
                    {" "}
                    <PlayIcon className="h-4 w-4 text-white" /> How It Works
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <span className="mb-2 block text-lg text-primary200">
                  Smart Delivery Service{" "}
                </span>
                <h1 className="text-3xl font-semibold text-white md:text-3xl lg:text-4xl xl:text-5xl">
                  Delivery anywhere, anytime, anyone
                </h1>
                <p className="mt-4 text-base text-white lg:text-lg xl:text-xl">
                  Join us in redefining accessibility and embracing the power of
                  community and connection.
                </p>
                <div className="mt-6 flex gap-2 pb-20">
                  <button className="rounded-full bg-primary300 px-6 py-3 text-base text-white transition hover:bg-opacity-90">
                    Join Us Now
                  </button>
                  <button className="flex items-center gap-2 rounded-full bg-transparent px-4 py-3 text-base text-white">
                    {" "}
                    <PlayIcon className="h-4 w-4 text-white" /> How It Works
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="relative col-span-3 hidden items-center overflow-hidden from-[rgba(168,102,99,0.80)] after:absolute after:h-full after:w-full after:bg-gradient-to-b after:to-[rgba(0,0,0,0.80)] after:z-1 md:flex">
            <img
              src="/images/website/building.jpg"
              alt="building"
              className="absolute z-1 h-full w-full object-cover"
            />
            <img
              src="/images/website/home-banner.png"
              alt="home-banner"
              className="relative z-9 m-auto w-auto px-6"
            />
          </div>
        </section>

        <section className="search relative z-1 -mt-17 mb-15">
          <div className="container mx-auto">
            <div className="mx-auto flex w-full flex-wrap gap-4 rounded-xl bg-white p-8 shadow-[0_1px_42px_-21px_#00000026;] md:w-11/12">
              <div className="w-full flex-auto md:w-auto md:flex-1">
                <label
                  htmlFor="Pickup Location"
                  className=" block text-base font-medium leading-6 text-black"
                >
                  Pickup Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="PickupLocation"
                    placeholder="Sending From"
                    className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                  ></input>
                </div>
              </div>
              <div className="w-full flex-auto md:w-auto md:flex-1">
                <label
                  htmlFor="Drop Location"
                  className=" block text-base font-medium leading-6 text-black"
                >
                  Drop Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="DropLocation"
                    placeholder="Sending To"
                    className="ring-gray-300 block w-full resize-none rounded-full border border-[#E2E2E2] px-4 py-2 focus:outline-none sm:text-base sm:leading-6"
                  ></input>
                </div>
              </div>
              <button className="mt-auto inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-primary300 bg-primary300 p-3 px-8 text-center font-medium text-white transition hover:bg-opacity-90 md:min-w-60">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="rounded-lg bg-primary100 px-6 py-8 text-center">
                  <Image
                    src={"/images/website/Global-Product-Access.svg"}
                    width={60}
                    height={60}
                    alt="Global-Product-Access"
                    className="mx-auto mb-5 h-15 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-black">
                    Global Product Access
                  </h4>
                  <span className="mt-2 block text-base text-grey500">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </span>
                </div>
              </div>
              <div>
                <div className="rounded-lg bg-primary100 px-6 py-8 text-center">
                  <Image
                    src={"/images/website/Delivery-Network.svg"}
                    width={60}
                    height={60}
                    alt="Delivery-Network"
                    className="mx-auto mb-5 h-15 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-black">
                    Peer-to-Peer Delivery Network
                  </h4>
                  <span className="mt-2 block text-base text-grey500">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </span>
                </div>
              </div>
              <div>
                <div className="rounded-lg bg-primary100 px-6 py-8 text-center">
                  <Image
                    src={"/images/website/Secure-Transaction-System.svg"}
                    width={60}
                    height={60}
                    alt="Secure-Transaction-System"
                    className="mx-auto mb-5 h-15 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-black">
                    Secure Transaction System
                  </h4>
                  <span className="mt-2 block text-base text-grey500">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </span>
                </div>
              </div>
              <div>
                <div className="rounded-lg bg-primary100 px-6 py-8 text-center">
                  <Image
                    src={"/images/website/Ratings-Review.svg"}
                    width={60}
                    height={60}
                    alt="Ratings-Reviews"
                    className="mx-auto mb-5 h-15 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-black">
                    User Ratings and Reviews
                  </h4>
                  <span className="mt-2 block text-base text-grey500">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us mt-15">
          <div className="container mx-auto">
            <div className="rounded-xl bg-[#F8F9F9] bg-[url('/images/website/about-pattern.png')] bg-contain bg-right bg-no-repeat p-10 py-6 lg:p-15 lg:py-12">
              <div className="grid grid-cols-12 gap-4 sm:gap-10 xl:gap-19">
                <div className="col-span-12 lg:col-span-5">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="/images/website/about-us.jpg"
                      alt="about-us"
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <div className="col-span-12 flex flex-col justify-center lg:col-span-7">
                  <div>
                    <h3 className="mb-6 text-3xl font-semibold capitalize text-primary500 lg:text-4xl xl:mb-8 xl:text-5xl">
                      About <span className="text-red">Us</span>
                      <div className="mt-2 flex items-center gap-1">
                        <div className="h-1 w-15 rounded-full bg-primary200"></div>
                        <div className="h-1 w-3 rounded-full bg-primary200"></div>
                        <div className="h-1 w-1 rounded-full bg-primary200"></div>
                      </div>
                    </h3>
                    <div className="mb-5 text-xl font-semibold text-grey500 lg:text-2xl xl:text-4xl">
                      Revolutionizing Access to Products{" "}
                      <span className="text-red">Across Borders</span>
                    </div>
                    <p className="text-base text-grey500">
                      Bring Me is a revolutionary peer-to-peer delivery platform
                      that connects individuals seeking products from distant
                      locations with travelers heading in that direction.
                    </p>
                    <p className="text-base text-grey500">
                      Our mission is to break down barriers of accessibility and
                      make the world a smaller, more connected place.
                    </p>
                    <p className="text-base text-grey500">
                      With Bring Me, you can access any product, anywhere, and
                      travelers can make their journeys even more meaningful by
                      helping others.
                    </p>
                    <button className="mt-7 rounded-full bg-primary300 px-6 py-3 text-base text-white transition hover:bg-opacity-90">
                      More About Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us mt-15 bg-[#EAFBFF]">
          <div className="container mx-auto">
            <div className="py-14">
              <div className="text-center">
                <h3 className="mb-6 text-3xl font-semibold capitalize text-primary500 lg:text-4xl xl:mb-8 xl:text-5xl">
                  How Does IT <span className="text-red">Work</span>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <div className="h-1 w-15 rounded-full bg-primary200"></div>
                    <div className="h-1 w-3 rounded-full bg-primary200"></div>
                    <div className="h-1 w-1 rounded-full bg-primary200"></div>
                  </div>
                </h3>
                <p className="text-base text-secondary500 md:text-xl">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et tempor incididunt.
                </p>
              </div>

              <div className="relative mx-auto mt-10 flex w-full flex-col gap-6 after:absolute after:right-0 after:top-9 after:z-1 after:hidden after:h-54 after:w-0.5 after:border-r-2 after:border-dashed after:border-grey300 after:lg:block xl:w-10/12 xl:gap-12">
                <div className="relative flex w-full flex-col gap-8 text-center before:absolute before:left-0 before:top-6.5 before:z-1 before:hidden before:h-6 before:w-6 before:rounded-full before:bg-primary400 before:shadow-[0_0_0_4px_#0ae0f8] after:absolute after:top-9 after:hidden after:h-0.5 after:w-full after:border-b-2 after:border-dashed after:border-grey300 lg:flex-row before:lg:block after:lg:block xl:gap-17">
                  <div className="relative">
                    <span className="relative z-1 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border border-primary300 bg-white">
                      <Image
                        src={"/images/website/process-1.svg"}
                        className="h-12"
                        height={48}
                        width={48}
                        alt="process-1"
                      />
                    </span>
                    <div className="flex justify-center gap-3 text-left lg:justify-start">
                      <span className="text-grey200 text-xl">1</span>
                      <div className="">
                        <h5 className="text-lg font-semibold text-primary400">
                          Register with email
                        </h5>
                        <p className="max-w-75 text-base text-grey500">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="relative z-1 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border border-primary300 bg-white">
                      <Image
                        src={"/images/website/process-2.svg"}
                        className="h-12"
                        height={48}
                        width={48}
                        alt="process-2"
                      />
                    </span>
                    <div className="flex justify-center gap-3 text-left lg:justify-start">
                      <span className="text-grey200 text-xl">2</span>
                      <div className="">
                        <h5 className="text-lg font-semibold text-primary400">
                          Create and submit the task
                        </h5>
                        <p className="max-w-75 text-base text-grey500">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="relative z-1 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border border-primary300 bg-white">
                      <Image
                        src={"/images/website/process-3.svg"}
                        className="h-12"
                        height={48}
                        width={48}
                        alt="process-3"
                      />
                    </span>
                    <div className="flex justify-center gap-3 text-left lg:justify-start">
                      <span className="text-grey200 text-xl">3</span>
                      <div className="">
                        <h5 className="text-lg font-semibold text-primary400">
                          Add amount in Escrow{" "}
                        </h5>
                        <p className="max-w-75 text-base text-grey500">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex w-full flex-col justify-center gap-8 text-center before:absolute before:left-0 before:top-6.5 before:z-1 before:hidden before:h-6 before:w-6 before:rounded-full before:bg-white before:shadow-[0_0_0_4px_#0ae0f8] after:absolute after:top-9 after:hidden after:h-0.5 after:w-full after:border-b-2 after:border-dashed after:border-grey300 lg:flex-row before:lg:block after:lg:block xl:gap-17">
                  <div className="relative lg:order-last">
                    <span className="relative z-1 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border border-primary300 bg-white">
                      <Image
                        src={"/images/website/process-1.svg"}
                        className="h-12"
                        height={48}
                        width={48}
                        alt="process-1"
                      />
                    </span>
                    <div className="flex justify-center gap-3 text-left lg:justify-start">
                      <span className="text-grey200 text-xl">4</span>
                      <div className="">
                        <h5 className="text-lg font-semibold text-primary400">
                          Register with email
                        </h5>
                        <p className="max-w-75 text-base text-grey500">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="relative z-1 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border border-primary300 bg-white">
                      <Image
                        src={"/images/website/process-2.svg"}
                        className="h-12"
                        height={48}
                        width={48}
                        alt="process-2"
                      />
                    </span>
                    <div className="flex justify-center gap-3 text-left lg:justify-start">
                      <span className="text-grey200 text-xl">5</span>
                      <div className="">
                        <h5 className="text-lg font-semibold text-primary400">
                          Create and submit the task
                        </h5>
                        <p className="max-w-75 text-base text-grey500">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials bg-white py-15 pl-10 lg:pl-30 xl:pl-46">
          <div className="grid grid-cols-12 items-center gap-8 xl:gap-16">
            <div className="col-span-12 md:col-span-4">
              <h3 className="mb-6 text-3xl font-semibold capitalize text-primary500 lg:text-4xl xl:mb-8 xl:text-5xl">
                Client{" "}
                <span className="relative text-red">
                  Testimonials
                  <Image
                    className="absolute -right-20 -top-15"
                    src="/images/website/quotes.png"
                    width={70}
                    height={70}
                    alt="quotes"
                  ></Image>
                </span>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-1 w-15 rounded-full bg-primary200"></div>
                  <div className="h-1 w-3 rounded-full bg-primary200"></div>
                  <div className="h-1 w-1 rounded-full bg-primary200"></div>
                </div>
              </h3>
              <div className="text-xl font-semibold text-grey500 lg:text-2xl xl:text-4xl">
                Excellent Company <span className="text-red">Quality</span>{" "}
                Services
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <div className="relative py-15 after:absolute after:right-0 after:top-0 after:h-full after:w-4/5 after:rounded-l-xl after:bg-primary500 xl:py-20">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                  spaceBetween={0}
                  autoplay={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 1.5,
                      spaceBetween: 0,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="m-4 mb-14 rounded-lg bg-white p-5 shadow-default">
                      <div className="flex items-center gap-4">
                        <span className="inline-block overflow-hidden rounded-full border-4 border-[#B5E9EF]">
                          <Image
                            className="h-full w-full rounded-full object-cover"
                            src="/images/profile.png"
                            width={80}
                            height={80}
                            alt="prodile-image"
                          ></Image>
                        </span>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-semibold text-primary400">
                            Esther Hills
                          </h3>
                          <span className="block w-full text-base text-grey500">
                            Lead Intranet Technician
                          </span>
                        </div>
                      </div>
                      <p className="mt-6 block w-full text-base text-grey500">
                        Omnis totam molestiae delectus nemo alias nesciunt harum
                        et. Nobis dolorum excepturi quod vel. Sunt est qui ab
                        non dolores repellat rem impedit dolores. Ut ea rerum
                        cum eum. Alias dolores tempore illo accusantium est et
                        voluptatem voluptas.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="m-4 mb-14 rounded-lg bg-white p-5 shadow-default">
                      <div className="flex items-center gap-4">
                        <span className="inline-block overflow-hidden rounded-full border-4 border-[#B5E9EF]">
                          <Image
                            className="h-full w-full rounded-full object-cover"
                            src="/images/profile.png"
                            width={80}
                            height={80}
                            alt="prodile-image"
                          ></Image>
                        </span>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-semibold text-primary400">
                            Esther Hills
                          </h3>
                          <span className="block w-full text-base text-grey500">
                            Lead Intranet Technician
                          </span>
                        </div>
                      </div>
                      <p className="mt-6 block w-full text-base text-grey500">
                        Omnis totam molestiae delectus nemo alias nesciunt harum
                        et. Nobis dolorum excepturi quod vel. Sunt est qui ab
                        non dolores repellat rem impedit dolores. Ut ea rerum
                        cum eum. Alias dolores tempore illo accusantium est et
                        voluptatem voluptas.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose bg-white">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="mb-6 text-3xl font-semibold capitalize text-primary500 lg:text-4xl xl:mb-8 xl:text-5xl">
                Why Choose <span className="text-red">BringMe</span>
                <div className="mt-2 flex items-center justify-center gap-1">
                  <div className="h-1 w-15 rounded-full bg-primary200"></div>
                  <div className="h-1 w-3 rounded-full bg-primary200"></div>
                  <div className="h-1 w-1 rounded-full bg-primary200"></div>
                </div>
              </h3>
              <p className="text-base text-secondary500 md:text-xl">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et tempor incididunt.
              </p>
            </div>

            <div className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <span className="mx-auto flex h-22 w-24 items-center justify-center rounded-2xl bg-primary400 p-4">
                  <Image
                    src={"/images/website/globe.svg"}
                    width={50}
                    height={50}
                    alt="globe"
                  />
                </span>
                <h5 className="mt-4 text-lg font-semibold text-black">
                  Unparalleled Access
                </h5>
                <p className="block w-full text-base text-grey500">
                  Access to products not available locally
                </p>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-22 w-24 items-center justify-center rounded-2xl bg-primary400 p-4">
                  <Image
                    src={"/images/website/paid.svg"}
                    width={50}
                    height={50}
                    alt="paid"
                  />
                </span>
                <h5 className="mt-4 text-lg font-semibold text-black">
                  Earn While You Travel
                </h5>
                <p className="block w-full text-base text-grey500">
                  Access to products not available locally
                </p>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-22 w-24 items-center justify-center rounded-2xl bg-primary400 p-4">
                  <Image
                    src={"/images/website/savings.svg"}
                    width={50}
                    height={50}
                    alt="savings"
                  />
                </span>
                <h5 className="mt-4 text-lg font-semibold text-black">
                  cost-effectiveness shipping
                </h5>
                <p className="block w-full text-base text-grey500">
                  Access to products not available locally
                </p>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-22 w-24 items-center justify-center rounded-2xl bg-primary400 p-4">
                  <Image
                    src={"/images/website/add_reaction.svg"}
                    width={50}
                    height={50}
                    alt="add_reaction"
                  />
                </span>
                <h5 className="mt-4 text-lg font-semibold text-black">
                  Seamless Experience
                </h5>
                <p className="block w-full text-base text-grey500">
                  Access to products not available locally
                </p>
              </div>
            </div>
          </div>
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

export default Home;
