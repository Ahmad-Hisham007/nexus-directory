"use client";
import NavLink from "@/Components/NavLink/NavLink";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const { data: session } = useSession();
  const imageSrc = session?.user?.image;
  if (!imageSrc) return null;

  return (
    <div>
      <div className="">
        <button
          className="btn h-auto p-0 rounded-full shadow-none border border-slate-400"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } as React.CSSProperties}
        >
          <Image
            src={imageSrc}
            alt="user image"
            width={35}
            height={35}
            className="rounded-full"
          ></Image>
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm space-y-2"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
        >
          <li>
            <NavLink href="/dashboard/profile">Profile</NavLink>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
