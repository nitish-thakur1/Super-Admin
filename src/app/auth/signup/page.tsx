import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/outline'


const SignUp: React.FC = () => {
  return (
    <section className="login-module relative bg-white min-h-[100vh] dark:bg-boxdark">
      <img
          className="login_pattern hidden lg:block fixed h-screen right-0 top-0 bottom-0 bg-cover"
          src={"/images/login/login-pattern.png"}
          alt="Logo"
      />
      <div className="container mx-auto">
      <div className="flex w-full flex-wrap items-center justify-center py-8 lg:py-25">
          <div className="mx-auto h-full dark:border-strokedark xl:w-2/6 md:w-3/6 sm:w-4/6 w-5/6">
            <div className="items-center relative flex h-full w-full flex-col justify-center rounded-lg bg-white p-6 shadow-[0_4px_24px_4px_rgba(0,0,0,0.15)] sm:p-12.5 xl:p-8">
            <Link className="mb-5.5 inline-block" href="/">
              <Image
                className="hidden dark:block"
                src={"/images/logo.svg"}
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo.svg"}
                alt="Logo"
                width={176}
                height={32}
              />
            </Link>

            <h2 className="w-full text-base block mb-7 font-semibold text-black dark:text-white text-xl">
              Start your journey with Bring Me.
            </h2>

            <form>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="name"
                    placeholder="Type your full name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-10 text-black outline-none focus:border-primary300 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary300"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-10 text-black outline-none focus:border-primary300 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary300"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="name"
                    placeholder="Type your username"
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-10 text-black outline-none focus:border-primary300 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary300"
                  />
                </div>
              </div>

              <div className="">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Type your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-4 pr-10 text-black outline-none focus:border-primary300 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary300"
                  />
                </div>
              </div>

              <div className="my-7 text-center">
                <button
                  type="submit"
                  value="Create Account"
                  className="inline-flex items-center gap-2 px-8 font-medium cursor-pointer border border-primary300 bg-primary300 rounded-full p-3 text-white transition hover:bg-opacity-90">Create Account 
                  <ArrowRightIcon className="w-6 h-6" />
                  </button>
                
              </div>

              <div className="my-7 text-center">
                <div 
                className="w-full block text-grey400 relative
                after:w-2/4 after:top-0 after:bottom-0 after:h-px after:bg-[#ddd] after:absolute after:left-0 after:m-auto
                before:w-2/4 before:top-0 before:bottom-0 before:h-px before:bg-[#ddd] before:absolute before:right-0 before:m-auto
                "><span className="bg-white px-3 relative z-1">or</span></div>
              </div>

              <div className="my-7 text-center">
                <img src={"/images/login/signup-option.jpg"} alt="" className="mx-auto cursor-pointer" />
              </div>

              <div className="mt-6 text-center">
                <p>
                <div className="text-black opacity-80 inline-block">Already have an account?{" "}</div>
                  <Link href="/auth/signin" className="text-secondary300 ml-2">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SignUp;
