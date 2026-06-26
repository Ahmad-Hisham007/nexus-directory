import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center font-semibold text-xl text-base-content">
      <MdKeyboardArrowRight />
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
