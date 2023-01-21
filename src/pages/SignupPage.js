import left_image from "../assets/images/login_image_1.png";
import logo from "../assets/images/tmp_logo.png";
// import pb from "lib/pocketbase";
// import { useForm } from "react-hook-form";
import React from "react";
import useSignup from "hooks/useSignup";
import { useForm } from "react-hook-form";

function SignupPage() {
    const { mutate: signup, isLoading, isError } = useSignup();
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
        <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left View */}
            <div className="">
                <img
                    className="lg:absolute lg:w-screen-1/2 lg:h-screen lg:object-cover hidden lg:flex"
                    src={left_image}
                    alt=""
                />
            </div>

            {/* Right View */}
            <div
                className="overflow-auto lg:w-screen-1/2 lg:h-screen lg:px-[7rem] lg:text-center lg:items-center lg:flex lg:flex-col
                            text-center w-screen p-[5rem] items-center flex flex-col"
            >
                <img className="" src={logo} alt="logo" />
                <h1 className="text-[4.5rem] font-normal mt-[2rem]">
                    Create an Account
                </h1>
                <h2 className="text-[2rem] font-normal text-[#6C6C6C] mb-[7rem]">
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
                    <div className="grid grid-row-2 mt-[5rem] gap-[5rem]">
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
                    <h2 className="text-left ml-[1rem] font-normal text-[1.2rem] text-[#776E6E]">
                        Password must contain at least:
                    </h2>
                    <ul className="ml-[2.75rem] list-disc text-left font-normal text-[1rem] text-[#776E6E] mb-[4.2rem]">
                        <li>8 Characters</li>
                        <li>1 Uppercase Letter</li>
                        <li>1 Lowercase Letter</li>
                        <li>1 Symbol</li>
                    </ul>

                    <div className="flex self-start">
                        <label
                            htmlFor="toc-checkbox"
                            className="text-[#776E6E] text-[1.4rem] font-normal"
                        >
                            <input
                                type="checkbox"
                                className="align-middle mr-[0.625rem]"
                            />
                            By signing up, you agree with our&nbsp;
                            <a
                                className="text-[#F06680] text-[1.4rem] font-normal hover:text-[#F06680]"
                                href="url"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div>
                    <button className="text-[#ffffff] bg-[#F06680] hover:bg-[#F0667fc7] focus:outline-none rounded-[1rem] outline-none w-[45rem] h-[3.6rem] mt-[2.8rem] mb-[2.4rem] text-[1.8rem] font-medium">
                        Sign Up
                    </button>
                </form>
                <h1 className="text-[#776E6E] text-[1.4rem] font-normal">
                    Already have an account?&nbsp;
                    <a
                        className="font-medium text-[#F06680] hover:text-[#F06680]"
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
