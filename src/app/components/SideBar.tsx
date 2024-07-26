"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteLogo from "../../../public/logos/site-logo.webp";
import {
  HiHome,
  HiDotsHorizontal,
  HiUserAdd,
  HiUserRemove,
} from "react-icons/hi";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const SideBar = () => {
  return (
    <div className="flex flex-col pb-14 px-8 min-w-[5rem] w-[15rem] min-h-screen">
      <div className="w-full flex flex-col gap-4">
        <Link href="/">
          <Image
            src={SiteLogo}
            alt="Site Logo"
            width={1000}
            height={1000}
            priority
            className="rounded-full w-36 hover:scale-110 transition duration-300"
          />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-3 py-2 px-3 rounded hover:text-primaryRed hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-neutral-800 transition duration-200"
        >
          <HiHome className="w-7 h-7" />
          <span className="font-bold hidden lg:inline w-fit">Home</span>
        </Link>

        <button className="flex items-center gap-3 py-2 px-3 rounded hover:text-primaryRed hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-neutral-800 transition duration-200">
          <HiUserRemove className="w-7 h-7" />
          <span className="font-bold hidden lg:inline w-fit">Signout</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
