import Image from "next/image";
import React from "react";
import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import DashboardSidebarToggle from "./DashboardSidebarToggle";
import NavLink from "../../../Components/NavLink/NavLink";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrLayer } from "react-icons/gr";
import { PiGearBold } from "react-icons/pi";
import UserProfile from "./UserProfile";

const DashboardLayoutUi = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      {/* <input id="drawer-dashboard" type="checkbox" className="drawer-toggle" /> */}
      <DashboardSidebarToggle></DashboardSidebarToggle>
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-slate-700 border border-slate-500 md:flex justify-end grid grid-cols-[50px_auto_50px]">
          <label
            htmlFor="drawer-dashboard"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost md:hidden flex items-center"
          >
            {/* Sidebar toggle icon */}
            <TbLayoutSidebarRightCollapse className="my-1.5 text-slate-500 inline-block size-4 text-2xl w-6 h-6" />
          </label>
          <div className="px-4 flex items-end gap-3 md:hidden">
            <Image
              src="/nexus-directory-favico.png"
              width="120"
              height="50"
              alt="dashboard-logo"
              className="w-20"
            ></Image>
            <span className="leading-none font-semibold">Dashboard</span>
          </div>
          <UserProfile></UserProfile>
        </nav>
        {/* Page content here */}
        <div className="p-4 bg-slate-900 min-h-screen p-10">{children}</div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible border-slate-500 bg-slate-700">
        <label
          htmlFor="drawer-dashboard"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start border is-drawer-close:w-14 is-drawer-open:w-64 border-slate-500 bg-slate-700">
          {/* Sidebar content here */}
          <div className="px-2 py-0 border-b border-slate-500 w-full">
            <button
              className="is-drawer-close:tooltip cursor-pointer is-drawer-close:tooltip-right flex items-center  is-drawer-open:py-5 is-drawer-open:px-4 is-drawer-close:py-4"
              data-tip="Homepage"
            >
              <Image
                src="/nexus-directory-favico.png"
                width="120"
                height="50"
                alt="dashboard-logo"
                className="is-drawer-open:w-20 is-drawer-close:10"
              ></Image>
              <span className="is-drawer-close:hidden">Dashboard</span>
            </button>
          </div>
          <ul className="menu px-0 w-full grow [&_li]:rounded-0 [&_li]:border-b [&_li]:border-slate-500 text-slate-400 font-medium [&_a.active]:bg-black/20">
            {/* List item */}
            <li>
              <NavLink
                href="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <MdOutlineSpaceDashboard className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/dashboard/posts"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Posts"
              >
                <GrLayer className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Posts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/dashboard/settings"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <PiGearBold className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Settings</span>
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-start items-center w-full p-2">
            <label
              htmlFor="drawer-dashboard"
              aria-label="open sidebar"
              className="btn btn-square bg-slate-500 grow box-border flex is-drawer-open:flex-row-reverse justify-between items-center border-0 p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Open sidebar"
            >
              {/* Sidebar toggle icon */}
              <TbLayoutSidebarRightCollapse className="my-1.5 inline-block size-4 is-drawer-open:hidden" />
              <TbLayoutSidebarRightExpand className="my-1.5 inline-block size-4 is-drawer-close:hidden" />
              <span className="is-drawer-close:hidden">Close sidebar</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutUi;
