"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
type LoginFormInputs = {
  email: string;
  password: string;
  rememberMeCheckBox: boolean;
};
const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      toast.promise(
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }),
        {
          loading: "Logging in ",
          success: (res) => {
            if (res?.error) {
              throw new Error(res.error);
            }
            reset();
            router.push("/dashboard");
            router.refresh();
            return "Login Successful!";
          },
          error: (err) => {
            return err.message || "Invalid Credentials!";
          },
        },
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="h-auto w-full text-center space-y-4 inline-block [&_label]:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdOutlineEmail className="opacity-50" />

        <input
          type="text"
          {...register("email")}
          className=" grow"
          placeholder="Email address"
        />
      </label>
      <label className="input input-md outline-0 focus:border-2 border-[0_0_2_0] focus:border-primary rounded-none">
        <MdLockOutline className="opacity-50" />
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
          })}
          className="grow"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </label>
      <div className="flex justify-between mb-4">
        <label className="label text-sm">
          <input
            type="checkbox"
            {...register("rememberMeCheckBox")}
            className="checkbox checkbox-xs rounded-xs"
          />
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="w-full btn border-0 btn-lg rounded-3xl bg-linear-to-br from-primary to-secondary text-white uppercase text-sm mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
