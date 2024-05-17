"use client";
import WebLayout from "@/components/Layouts/WebLayout";
import "@/css/style.css";
import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <WebLayout>
        <section className="flex min-h-50 flex-col items-center justify-center bg-primary500 bg-[url('/images/website/inner-pattern.png')] bg-cover bg-no-repeat p-6 text-center">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-3 text-base text-primary200 lg:text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </section>

        <section className="information-box px-0 py-6 text-[#696E76] lg:py-12">
          <div className="container mx-auto">
            <p className="mb-3 block text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>

            <h5 className="mb-3 mt-5 block text-base font-semibold text-black">
              Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by
              Cicero in 45 BC
            </h5>
            <p className="mb-3 block text-base">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non.
            </p>
            <p className="mb-3 block text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>

            <h5 className="mb-3 mt-5 block text-base font-semibold text-black">
              Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by
              Cicero in 45 BC
            </h5>
            <p className="mb-3 block text-base">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non.
            </p>
            <p className="mb-3 block text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>

            <h5 className="mb-3 mt-5 block text-base font-semibold text-black">
              Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by
              Cicero in 45 BC
            </h5>
            <p className="mb-3 block text-base">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non.
            </p>
            <p className="mb-3 block text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>

            <h5 className="mb-3 mt-5 block text-base font-semibold text-black">
              Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by
              Cicero in 45 BC
            </h5>
            <p className="mb-3 block text-base">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non.
            </p>
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

export default PrivacyPolicy;
