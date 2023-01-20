import "../assets/styles/SignupPage.css";
import left_image from "../assets/images/login_image_1.png";
import logo from '../assets/images/tmp_logo.png';
import pb from "lib/pocketbase";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

function SignupPage() {
    return (
        <div className="wrapper">
            <div className="left-view">
                <img className="login-img" src={left_image} alt="" />
            </div>

            <div className="right-view">
                <img src={logo} alt="logo" />
                <h1 id="create-account-text">Create an Account</h1>
                <h2 id="welcome-title">
                    Welcome Back! Please enter your details below to sign up.
                </h2>

                <form>
                    <div id="name-input">
                        <input
                            placeholder="First Name"
                            id='first-name'
                        />
                        <input
                            placeholder="Last Name"
                            id='last-name'
                        />
                    </div>
                    <div id="org-pass-fields">
                        <input
                            placeholder="Organisation Email"
                        />
                        <input
                            placeholder="Password"
                            type='password'
                        />
                    </div>
                    {/* Password conditions: */}
                    <div>
                        <h2 id='pass-restrict'>Password must contain at least:</h2>
                        <ul id='pass-conditions'>
                            <li>8 Characters</li>
                            <li>1 Uppercase Letter</li>
                            <li>1 Lowercase Letter</li>
                            <li>1 Symbol</li>
                        </ul>
                    </div>

                    <div id='sign-up-confirmation'>
                        <label htmlFor="toc-checkbox" id="terms-and-conditions">
                            <input type='checkbox' id="toc-checkbox" />   
                            By signing up, you agree with our <a id="hyper-text" href="url">terms and conditions</a>
                        </label>
                    </div>
                </form>
                <button id="sign-up-button">Sign Up</button>
                <h1 id="account-exist">
                    Already have an account?&nbsp;
                    <a id="sign-in-text" href="">Sign in</a>
                </h1>
            </div>
        </div>
    );
}
export default SignupPage;
