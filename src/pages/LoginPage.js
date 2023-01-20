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
        reset();
    }

    if (isLoggedIn) {
        return (
            <div>
                <Dashboard loginStatus={isLoggedIn} handleLogout={logout} />
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="left_view">
                <img className="login-img" src={login_image_2} alt="" />
            </div>
            <div className="right_view">
                <img src={logo} alt="logo" />

                <p className="sign_in">Sign In</p>
                <p className="welcome">
                    Welcome Back! Please enter your login credentials.
                </p>
                {isLoading && <p>Loading...</p>}
                {isError && (
                    <p style={{ color: "red" }}>
                        Invalid Email or Password. Please try again.
                    </p>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Email"
                        className="email"
                        {...register("email")}
                    />
                    <input
                        placeholder="Password"
                        className="password"
                        type="password"
                        {...register("password")}
                    />

                    <div className="password_attri">
                        <div className="remember_me">
                            <input type="checkbox" />
                            <p className="remember_me_word">Remember me</p>
                        </div>
                        <div className="forgot_pass">Forgot Password?</div>
                    </div>

                    <button className="login_button">
                        {isLoading ? "Loading..." : "Log In"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
