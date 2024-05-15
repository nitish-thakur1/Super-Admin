"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-20 z-9 flex h-[calc(100vh-130px)] w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:sticky lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4 py-9">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  href="/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-primary300 ${pathname.includes("dashboard") && "bg-primary300"
                    }`}
                >
                  <Image
                    width={24}
                    height={24}
                    src={"/images/sidenav/dashboard.svg"}
                    alt="dashboard"
                  />
                  Dashboard
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item My Listing --> */}
              <li>
                <Link
                  href="/my-listing"
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-primary300 ${pathname.includes("my-listing") && "bg-primary300"
                    }`}
                >                  
                  <Image
                    width={24}
                    height={24}
                    src={"/images/sidenav/my-listing.svg"}
                    alt="listing"
                  />
                  My Listing
                </Link>
              </li>
              {/* <!-- Menu Item Add My Listing --> */}

              {/* <!-- Menu Item Track Payment--> */}
              <li>
                <Link
                  href="/track-payment"
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-primary300 ${pathname.includes("track-payment") && "bg-primary300"
                    }`}
                >             
                <Image
                  width={24}
                  height={24}
                  src={"/images/sidenav/track-payment.svg"}
                  alt="track-payment"
                />
                  Track Payment
                </Link>
              </li>
              {/* <!-- Menu Item Track Payment--> */}

              {/* <!-- Menu Item Charts --> */}
              <li>
                <Link
                  href="/chat"
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-primary300 ${pathname.includes("chat") && "bg-primary300"
                    }`}
                >         
                <Image
                  width={24}
                  height={24}
                  src={"/images/sidenav/chats.svg"}
                  alt="charts"
                />
                  Chats
                </Link>
              </li>
              {/* <!-- Menu Item Charts --> */}

              {/* <!-- Menu Item My Profile--> */}
              <li>
                <Link
                  href="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-primary300 ${pathname.includes("profile") && "bg-primary300"
                    }`}
                >      
                <Image
                  width={24}
                  height={24}
                  src={"/images/sidenav/my-profile.svg"}
                  alt="my-profile"
                />
                  My Profile
                </Link>
              </li>
              {/* <!-- Menu Item My Profile--> */}

              {/* <!-- Menu Item Rating & Reviews --> */}
              <li>
                <Link
                  href="/rating-reviews"
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-primary300 ${pathname.includes("rating-review") && "bg-primary300"
                    }`}
                >
                <Image
                  width={24}
                  height={24}
                  src={"/images/sidenav/rating-review.svg"}
                  alt="rating-review"
                />
                  Rating & Reviews
                </Link>
              </li>
              {/* <!-- Menu Item Rating & Reviews --> */}

            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
