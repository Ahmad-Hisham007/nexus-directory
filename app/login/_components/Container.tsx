"use client";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import LoginForm from "./LoginForm";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SignupForm from "./SignupForm";
import { signIn } from "next-auth/react";

const Container = () => {
  const [isLoginCol, setIsLoginCol] = useState<boolean>(true);
  const formRef = useRef<HTMLDivElement>(null);
  const [bannerH, setBannerH] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [heightDiff, setHeightDiff] = useState(0);

  useEffect(() => {
    const calculateHeights = () => {
      if (formRef.current && bannerRef.current) {
        const fH = formRef.current.offsetHeight;
        const bH = bannerRef.current.offsetHeight;
        setBannerH(bH);
        // Form theke Banner minus korle je extra space thake
        setHeightDiff(fH - bH);
      }
    };

    // Initial calculation
    calculateHeights();

    // Content load hote deri hole ba resize hole recalculated hobe
    window.addEventListener("resize", calculateHeights);
    return () => window.removeEventListener("resize", calculateHeights);
  }, [isLoginCol]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoginCol]);
  const handleSocialLogin = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };
  return (
    <div
      className={`max-w-6xl mx-auto grow flex flex-col lg:flex-row items-stretch rounded-lg shadow-lg shadow-slate-950 h-auto md:overflow-hidden overflow-visible lg:min-h-150 relative ${isLoginCol ? "" : "!lg:mt-0"}`}
      style={
        !isLoginCol && typeof window !== "undefined" && window.innerWidth < 1024
          ? {
              marginTop: `-${heightDiff}px`,
              marginBottom: `${heightDiff}px`,
            }
          : {}
      }
    >
      {/* 1. Form Container (Desktop e strictly 50% width) */}
      <div
        ref={formRef}
        className={`w-full lg:basis-1/2 flex flex-col justify-center items-center min-h-150 lg:h-auto transition-transform duration-700 
          ${
            isLoginCol
              ? "translate-x-0 translate-y-0"
              : "lg:translate-x-full translate-y-full lg:translate-y-0"
          } 
          z-30 relative`}
      >
        <div
          className={`login w-full lg:px-20 absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 
            ${isLoginCol ? "opacity-100 z-20 blur-0" : "opacity-0 z-10 blur-md"} px-4`}
          style={{
            backgroundImage: "url('/light-bg.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-3xl font-bold text-center pb-5">
            Sign in to your account
          </h2>
          <div className="h-0.5 bg-linear-to-br from-primary to-secondary mb-5 w-18" />
          <LoginForm />
          <div className="divider my-7 text-sm font-bold uppercase">OR</div>
          <div className="flex gap-2 [&_button]:cursor-pointer">
            <button
              className="rounded-full w-10 h-10 flex justify-center items-center bg-linear-to-br from-sky-800 to-slate-800 text-white hover:scale-110 transition-all"
              onClick={() => handleSocialLogin("linkedin")}
            >
              <FaLinkedinIn />
            </button>
            <button
              className="rounded-full w-10 h-10 flex justify-center items-center bg-linear-to-br from-gray-500 to-gray-900 text-white hover:scale-110 transition-all"
              onClick={() => handleSocialLogin("github")}
            >
              <FaGithub />
            </button>
            <button
              className="rounded-full w-10 h-10 flex justify-center items-center bg-[linear-gradient(140deg,yellow_25%,red_35%,green_50%,blue_70%)] text-white hover:scale-110 transition-all"
              onClick={() => handleSocialLogin("google")}
            >
              <FaGoogle />
            </button>
          </div>
        </div>

        <div
          className={`signup w-full lg:px-20 absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 
            ${!isLoginCol ? "opacity-100 z-20 blur-0" : "opacity-0 z-10 blur-md"} px-4`}
          style={{
            backgroundImage: "url('/light-bg.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-3xl font-bold text-center pb-5">
            Create a new account
          </h2>
          <div className="h-0.5 bg-linear-to-br from-primary to-secondary mb-5 w-18" />
          <SignupForm />
        </div>
      </div>

      {/* 2. Banner Container (Desktop e strictly 50% width) */}
      <div
        ref={bannerRef}
        className={`w-full lg:basis-1/2 flex flex-col items-center justify-center gap-5 text-center min-h-100 lg:h-auto py-10 px-4 transition-transform duration-700 
          ${
            isLoginCol
              ? "translate-x-0 translate-y-0"
              : "lg:-translate-x-full -translate-y-full lg:translate-y-0"
          } 
          z-50`}
        style={{
          backgroundImage: 'url("/dark-bg.jpg")',
          backgroundSize: "cover",
        }}
      >
        <Image
          width={120}
          height={50}
          alt="Next-Logo"
          src={"/nexus-directory-logo.png"}
        />
        <h2 className="text-xl text-white font-bold">
          Welcome to Next Authentication
        </h2>
        <p className="text-white px-5 lg:max-w-[80%] mx-auto">
          This page is built on Next JS, TypeScript, Mongoose and Next Auth.
        </p>
        <button
          className="border-0 px-15 btn btn-lg rounded-3xl bg-linear-to-br from-primary to-secondary text-white uppercase text-sm cursor-pointer"
          onClick={() => setIsLoginCol(!isLoginCol)}
        >
          {isLoginCol ? "Sign up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Container;
