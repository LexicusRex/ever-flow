import left_image from "../assets/images/login_image_1.png";
import logo from "../assets/images/logo-top.svg";
// import pb from "lib/pocketbase";
// import { useForm } from "react-hook-form";
import React from "react";
import useSignup from "hooks/useSignup";
import { useForm } from "react-hook-form";

function SignupPage() {
    const { mutate: signup, isError } = useSignup();
    const { register, handleSubmit, reset } = useForm();

    async function onSubmit(data) {
        signup({
            firstName: data.firstName,
            lastName: data.lastName,
            userEmail: data.email,
            userPassword: data.password,
        });
        if (!isError) {
            reset();
        }
    }

    return (
        <div className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
            {/* Left View */}
            <div className="">
                <img
                    className="hidden lg:absolute lg:flex lg:h-screen lg:w-screen-1/2 lg:object-cover"
                    src={left_image}
                    alt=""
                />
            </div>

            {/* Right View */}
            <div
                className="flex h-[7rem] w-screen flex-col items-center justify-center overflow-auto p-[5rem] text-center lg:flex
                            lg:h-screen lg:w-screen-1/2 lg:flex-col lg:items-center lg:px-[7rem] lg:text-center"
            >
                <img className="h-[20rem] w-[50rem]" src={logo} alt="logo" />
                <h1 className="mt-[2rem] text-[4.5rem] font-normal">
                    Create an Account
                </h1>
                <h2 className="mb-[7rem] text-[2rem] font-normal text-[#6C6C6C]">
                    Welcome Back! Please enter your details below to sign up.
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-[7.1rem]">
                        <input
                            placeholder="First Name"
                            className="border-b-[2px] border-[#d8d8d8] text-[1.6rem] outline-0"
                            type="text"
                            {...register("firstName")}
                        />
                        <input
                            placeholder="Last Name"
                            className="border-b-[2px] border-[#d8d8d8] text-[1.6rem] outline-0"
                            type="text"
                            {...register("lastName")}
                        />
                    </div>
                    <div className="grid-row-2 mt-[5rem] grid gap-[5rem]">
                        <input
                            placeholder="Organisation Email"
                            className="border-b-[2px] border-[#d8d8d8] text-[1.6rem] outline-0"
                            type="email"
                            {...register("email")}
                        />
                        <input
                            placeholder="Password"
                            className="border-b-[2px] border-[#d8d8d8] text-[1.6rem] outline-0"
                            type="password"
                            {...register("password")}
                        />
                    </div>
                    {/* Password conditions: */}
                    <h2 className="ml-[1rem] text-left text-[1.2rem] font-normal text-[#776E6E]">
                        Password must contain at least:
                    </h2>
                    <ul className="ml-[2.75rem] mb-[4.2rem] list-disc text-left text-[1rem] font-normal text-[#776E6E]">
                        <li>8 Characters</li>
                        <li>1 Uppercase Letter</li>
                        <li>1 Lowercase Letter</li>
                        <li>1 Symbol</li>
                    </ul>

                    <div className="flex self-start">
                        <label
                            htmlFor="toc-checkbox"
                            className="text-[1.4rem] font-normal text-[#776E6E]"
                        >
                            <input
                                type="checkbox"
                                className="mr-[0.625rem] align-middle accent-full-accent"
                            />
                            By signing up, you agree with our&nbsp;
                            <a
                                className="text-[1.4rem] font-normal text-full-accent hover:text-full-accent"
                                href="url"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div>
                    <button className="mt-[2.8rem] mb-[2.4rem] h-[3.6rem] w-[45rem] rounded-[1rem] bg-full-accent text-[1.8rem] font-medium text-[#ffffff] outline-none hover:bg-semi-accent focus:outline-none">
                        Sign Up
                    </button>
                </form>
                <h1 className="text-[1.4rem] font-normal text-[#776E6E]">
                    Already have an account?&nbsp;
                    <a
                        className="font-medium text-full-accent hover:text-full-accent"
                        href="/login"
                    >
                        Sign in
                    </a>
                </h1>
            </div>
        </div>
    );
}
export default SignupPage;
