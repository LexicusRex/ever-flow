// import login_image_1 from "../assets/images/login_image_1.png";
import login_image_2 from "../assets/images/login_image_2.png";
import React from "react";
import logo from "../assets/images/logo-left.svg";
import "../assets/styles/LoginPage.css";
import pb from "lib/pocketbase";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Dashboard from "./Dashboard";
import useLogout from "hooks/useLogout";
import useLogin from "hooks/useLogin";

function LoginPage() {
    const { mutate: login, isLoading, isError } = useLogin();

    const logout = useLogout();
    const { register, handleSubmit, reset } = useForm();

    async function onSubmit(data) {
        login({ email: data.email, password: data.password });
        if (!isError) {
            reset();
        }
    }

    if (pb.authStore.isValid) {
        return <Dashboard handleLogout={logout} />;
    }

    return (
        <div className="h-screen w-screen lg:grid lg:grid-cols-2">
            {/* Left view */}
            <div className="hidden lg:block">
                {/* Left view image */}
                <img
                    className="absolute h-[100vh] w-[50vw] object-cover"
                    src={login_image_2}
                    alt=""
                />
            </div>
            {/* Right view */}
            <div className="flex h-screen flex-col items-center overflow-y-auto overflow-x-hidden px-[5rem] pt-[12rem] text-center lg:px-[9rem]">
                <img className="max-w-[50rem]" src={logo} alt="logo" />
                {/* Login Title */}
                <h1 className="mt-[3.6rem] text-[4.5rem]" id="login-title">
                    Sign In
                </h1>
                {/* Welcome Message */}
                <h2
                    className="mt-[0.5rem] mb-[1rem] w-full text-[2rem] text-[#6c6c6c]"
                    id="login-welcome"
                >
                    Welcome Back!
                </h2>
                {/* {isLoading && <p>Loading...</p>} */}
                {isError && (
                    <p
                        style={{
                            color: "red",
                            fontSize: "1.4rem",
                            marginTop: "1rem",
                        }}
                    >
                        Invalid Email or Password. Please try again.
                    </p>
                )}

                {/* Log in form */}
                <form
                    className="login-form max-w-[70vw]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="mt-[6rem] w-full border-b-2 border-[#d8d8d8] text-[1.6rem] text-[#b4b4b4] outline-none"
                        placeholder="Email"
                        id="email"
                        {...register("email")}
                    />
                    <input
                        className="mt-[6rem] w-full border-b-2 border-[#d8d8d8] text-[1.6rem] text-[#b4b4b4] outline-none"
                        placeholder="Password"
                        id="password"
                        type="password"
                        {...register("password")}
                    />
                    <div className="grid grid-cols-2">
                        <label
                            className="mt-[24px] flex items-center text-[1.4rem] leading-[2.1rem] text-[#776e6e]"
                            id="remember-me-label"
                            htmlFor="remember-me-checkbox"
                        >
                            <input
                                type="checkbox"
                                name="is-remember-me"
                                id="remember-me-checkbox"
                                className="mr-[0.625rem] h-[1.6rem] w-[1.6rem] align-middle accent-full-accent"
                            />
                            Remember me
                        </label>
                        <a
                            href="/HELLO"
                            target="_blank"
                            className="mt-[24px] text-right text-[1.4rem] leading-[2.1rem] text-full-accent"
                            id="forgot-password-link"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        className="mt-[6rem] h-[3.6rem] w-full rounded-[10px] bg-full-accent text-[1.8rem] text-white hover:bg-semi-accent focus:outline-none"
                        id="login-button"
                    >
                        {isLoading ? "Loading..." : "Log In"}
                    </button>

                    <p
                        id="sign-up-prompt"
                        className="mt-[24px] text-[1.4rem] text-[#776e6e]"
                    >
                        Don't have an account?{" "}
                        <a className="text-full-accent" href="/register">
                            Sign up here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
