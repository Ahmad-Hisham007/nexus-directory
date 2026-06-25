"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardSidebarToggle = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 1024) {
        setIsDrawerOpen(false);
      }
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <input
      id="drawer-dashboard"
      type="checkbox"
      className="drawer-toggle"
      checked={isDrawerOpen}
      onChange={() => setIsDrawerOpen(!isDrawerOpen)}
    />
  );
};

export default DashboardSidebarToggle;
