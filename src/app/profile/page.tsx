"use client";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BuildingLibraryIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import AddBankAccountModal from "./add-bank-account";
import { useState } from "react";
import Link from "next/link";

const Profile = () => {

const [addBankAccountModal,setaddBankAccountModal]=useState(false)
  return (

    <>

<AddBankAccountModal show={addBankAccountModal} handleClose={()=>setaddBankAccountModal(false)}/>

    <DefaultLayout>

<Link href='/profile/add-payment'>Add Payment</Link>

      <div className="mb-8 rounded-lg bg-white shadow-default">
        <div className="border-b border-[#C8CFD9] p-4 px-6 text-lg font-semibold text-secondary500">
          <h3>User Profile</h3>
        </div>
        <div className="p-6 px-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <div className="flex items-center gap-5">
              <span className="inline-block overflow-hidden rounded-full border-4 border-primary500 p-2">
                <Image
                  className="h-full w-full rounded-full object-cover"
                  src="/images/profile.png"
                  width={100}
                  height={100}
                  alt="prodile-image"
                ></Image>
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-primary400">John Doe</h3>
                <span className="block w-full text-base text-slate-400">
                  Eastern European Time (EET), Cairo UTC +3
                </span>
              </div>
            </div>
            <div className="ml-0 flex gap-3 sm:ml-auto">
              <label
                htmlFor="cover"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary300 px-4 py-2 font-medium text-white transition-all hover:bg-primary400"
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                />
                <span className="whitespace-nowrap">Upload New Image</span>
              </label>

              <button className="rounded-full border border-primary300 px-4 py-2 text-primary300 transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <div className="rounded-lg bg-white shadow-default">
            <div className="p-6 px-6">
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-3 text-black">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>
                  <button className="ml-auto flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#D4F7FF]">
                    <PencilIcon className="h-4 w-4 text-black" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-base">
                  <div>
                    <span className="block text-[#696E76]">First Name</span>
                    <span className="block font-semibold text-black">John</span>
                  </div>
                  <div>
                    <span className="block text-[#696E76]">Last Name</span>
                    <span className="block font-semibold text-black">Doe</span>
                  </div>
                  <div>
                    <span className="block text-[#696E76]">Email Address</span>
                    <span className="block font-semibold text-black">
                      Johnxxxx@123.com
                    </span>
                  </div>
                  <div>
                    <span className="block text-[#696E76]">Phone Number</span>
                    <span className="block font-semibold text-black">
                      213 (513-4444 )
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[#696E76]">Bio</span>
                    <span className="block font-semibold text-black">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad iure sed ex ipsum tempore blanditiis ullam, excepturi
                      earum recusandae eaque doloribus ratione eveniet
                      perferendis suscipit consequuntur consequatur fuga, sunt
                      odio sapiente iste repellat nisi numquam quas! Impedit
                      excepturi reprehenderit incidunt magni quibusdam debitis,
                      quod eaque molestiae tenetur corrupti illum minus!
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-0">
                <div className="mb-3 text-black">
                  <h3 className="text-lg font-semibold">Address Information</h3>
                </div>
                <div className="text-base text-black">
                  House number 572 <br />
                  Sector 12 A <br />
                  lorem ipsum, Costa Rica <br />
                  401234
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-lg bg-white shadow-default">
            <div className="p-6 px-6">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-black">
                <h3 className="whitespace-nowrap text-lg font-semibold">
                  Manage Cards
                </h3>
                <button className="ml-auto cursor-pointer whitespace-nowrap rounded-full bg-primary300 px-4 py-2 font-medium text-white transition-all hover:bg-primary400">
                  Add new card
                </button>
              </div>

              <div className="border-b border-[#C8CFD9]">
                <div className="py-4">
                  <div className="mb-3 flex items-center justify-end gap-3 text-black">
                    <button className="flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#D4F7FF]">
                      <TrashIcon className="h-4 w-4 text-black" />
                    </button>
                    <button className="flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#D4F7FF]">
                      <PencilIcon className="h-4 w-4 text-black" />
                    </button>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="rounded-lg border-2 border-primary500 p-4 py-2">
                      <Image
                        src={"/images/mastercard-logo.jpg"}
                        width={72}
                        height={44}
                        alt="card"
                      />
                    </span>
                    <div className="font-semibold text-black">
                      <span className="block">****1234 | Expires 06/27</span>
                      <span className="block">John Doe</span>
                    </div>
                  </div>

                  <div className="mt-4 text-black">Default Payment Method</div>
                </div>
              </div>
              <div className="border-b border-[#C8CFD9]">
                <div className="py-4">
                  <div className="mb-3 flex items-center justify-end gap-3 text-black">
                    <button className="flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#D4F7FF]">
                      <TrashIcon className="h-4 w-4 text-black" />
                    </button>
                    <button className="flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-[#D4F7FF]">
                      <PencilIcon className="h-4 w-4 text-black" />
                    </button>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="rounded-lg border-2 border-primary500 p-4 py-2">
                      <Image
                        src={"/images/mastercard-logo.jpg"}
                        width={72}
                        height={44}
                        alt="card"
                      />
                    </span>
                    <div className="font-semibold text-black">
                      <span className="block">****1234 | Expires 06/27</span>
                      <span className="block">John Doe</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3 text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer accent-primary400"
                    />
                    Make Default Payment Card
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow-default">
        <div className="p-6 px-6">
          <div className="mb-3 flex items-center gap-3 text-black">
            <h3 className="text-lg font-semibold">Linked Bank Account</h3>
          </div>
          
          <div className="flex gap-16">
            <div className="flex items-center gap-5">
              <span className="rounded-lg border-2 border-[#C8CFD9] p-2">
                <Image
                  src={"/images/icici-logo.jpg"}
                  width={60}
                  height={60}
                  alt="card"
                />
              </span>
              <div className="font-semibold text-black">
                <span className="block">ICICI Bank 7414</span>
                <span className="block">Saving Account</span>
                <span className="block text-sm">Primary</span>
              </div>
            </div>
            <button onClick={()=>setaddBankAccountModal(true)} className="flex items-center gap-5 transition-all">
              <span className="rounded-lg border-2 border-dashed border-[#C8CFD9] p-2 w-20 h-20 flex items-center justify-center">
                <BuildingLibraryIcon className="h-9 w-9 text-black" />
              </span>
              <div className="font-semibold text-black">
                <span className="block">Add bank account</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </DefaultLayout>    
    </>

  );
};

export default Profile;
