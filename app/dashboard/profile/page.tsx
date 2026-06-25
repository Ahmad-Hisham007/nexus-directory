import React from "react";
import PageTitle from "../_components/PageTitle";
import { auth } from "@/auth";

const profilePage = async () => {
  const session = await auth();
  return (
    <div>
      <PageTitle title="Profile Page"></PageTitle>
      <h3 className="text-white mt-10">Hello! {session?.user?.name}</h3>
    </div>
  );
};

export default profilePage;
