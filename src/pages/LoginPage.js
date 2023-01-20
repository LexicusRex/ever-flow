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
        <div className="login-wrapper">
            <div className="left-view">
                <img className="login-img" src={login_image_2} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <img src={logo} alt="logo" />
                <h1 id="login-title">Sign In</h1>
                <h2 id="login-welcome">Welcome Back!</h2>
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
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Email"
                        id="email"
                        {...register("email")}
                    />
                    <input
                        placeholder="Password"
                        id="password"
                        type="password"
                        {...register("password")}
                    />
                    <div id="login-password-action-container">
                        <label
                            className="login-password-action-btn"
                            id="remember-me-label"
                            htmlFor="remember-me-checkbox">
                            <input
                                type="checkbox"
                                name="is-remember-me"
                                id="remember-me-checkbox"
                                className="login-input-checkbox"
                            />
                            Remember me
                        </label>
                        <a
                            href=""
                            target="_blank"
                            className="login-password-action-btn auth-link"
                            id="forgot-password-link">
                            Forgot Password?
                        </a>
                    </div>

                    <button id="login-button">
                        {isLoading ? "Loading..." : "Log In"}
                    </button>

                    <p id="sign-up-prompt">
                        Don't have an account?{" "}
                        <a className="auth-link" href="" target="_blank">
                            Sign up here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
