// import login_image_1 from "../assets/images/login_image_1.png";
import login_image_2 from "../assets/images/login_image_2.png";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/tmp_logo.png";
import "../assets/styles/LoginPage.css";
import pb from "lib/pocketbase";
import { useForm } from "react-hook-form";
import Dashboard from "./Dashboard";
import useLogout from "hooks/useLogout";
import useLogin from "hooks/useLogin";

function LoginPage() {
    const { mutate: login, isLoading, isError } = useLogin();

    const logout = useLogout();
    const { register, handleSubmit, reset } = useForm();

    const isLoggedIn = pb.authStore.isValid;

    async function onSubmit(data) {
        login({ email: data.email, password: data.password });
        if (!isError) {
            reset();
        }
    }

    if (isLoggedIn) {
        return (
            <div>
                <Dashboard loginStatus={isLoggedIn} handleLogout={logout} />
            </div>
        );
    }

    return (
        <div className="w-screen h-screen lg:grid lg:grid-cols-2">
            {/* Left view */}
            <div className="hidden lg:block">
                {/* Left view image */}
                <img
                    className="w-[50vw] h-[100vh] absolute object-cover"
                    src={login_image_2}
                    alt=""
                />
            </div>
            {/* Right view */}
            <div className="overflow-y-auto overflow-x-hidden px-[5rem] lg:px-[9rem] flex flex-col justify-center items-center text-center">
                <img src={logo} alt="logo" />
                {/* Login Title */}
                <h1 className="text-[4.5rem] mt-[3.6rem]" id="login-title">
                    Sign In
                </h1>
                {/* Welcome Message */}
                <h2
                    className="mt-[0.5rem] mb-[1rem] text-[2rem] text-[#6c6c6c] w-full"
                    id="login-welcome">
                    Welcome Back!
                </h2>
                {/* {isLoading && <p>Loading...</p>} */}
                {isError && (
                    <p
                        style={{
                            color: "red",
                            fontSize: "1.4rem",
                            marginTop: "1rem",
                        }}>
                        Invalid Email or Password. Please try again.
                    </p>
                )}

                {/* Log in form */}
                <form
                    className="login-form max-w-[70vw]"
                    onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="border-b-2 border-[#d8d8d8] text-[1.6rem] outline-none text-[#b4b4b4] mt-[6rem] w-full"
                        placeholder="Email"
                        id="email"
                        {...register("email")}
                    />
                    <input
                        className="border-b-2 border-[#d8d8d8] text-[1.6rem] outline-none text-[#b4b4b4] mt-[6rem] w-full"
                        placeholder="Password"
                        id="password"
                        type="password"
                        {...register("password")}
                    />
                    <div className="grid grid-cols-2">
                        <label
                            className="flex items-center text-[#776e6e] leading-[2.1rem] mt-[24px] text-[1.4rem]"
                            id="remember-me-label"
                            htmlFor="remember-me-checkbox">
                            <input
                                type="checkbox"
                                name="is-remember-me"
                                id="remember-me-checkbox"
                                className="w-[1.6rem] h-[1.6rem] mr-[0.625rem] accent-[#ff9bae] align-middle"
                            />
                            Remember me
                        </label>
                        <a
                            href=""
                            target="_blank"
                            className="text-right leading-[2.1rem] mt-[24px] text-[1.4rem] text-[#f06680]"
                            id="forgot-password-link">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        className="mt-[6rem] text-[1.8rem] w-full h-[3.6rem] rounded-[10px] text-white bg-[#f06680] focus:outline-none hover:bg-[#f0667fc7]"
                        id="login-button">
                        {isLoading ? "Loading..." : "Log In"}
                    </button>

                    <p
                        id="sign-up-prompt"
                        className="mt-[24px] text-[#776e6e] text-[1.4rem]">
                        Don't have an account?{" "}
                        <a className="text-[#f06680]" href="" target="_blank">
                            Sign up here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
