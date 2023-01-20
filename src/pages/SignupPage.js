import "../assets/styles/SignupPage.css";
import left_image from "../assets/images/login_image_1.png";
import logo from '../assets/images/tmp_logo.png';
import pb from "lib/pocketbase";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

function SignupPage() {
    return (
        <div className="signup-wrapper">
            <div className="signup-left-view">
                <img className="signup-login-img" src={left_image} alt="" />
            </div>

            <div className="signup-right-view">
                <img src={logo} alt="logo" />
                <h1 id="signup-create-account-text">Create an Account</h1>
                <h2 id="signup-signup-welcome">
                    Welcome Back! Please enter your details below to sign up.
                </h2>

                <form>
                    <div id="signup-name-input">
                        <input
                            placeholder="First Name"
                            id='signup-first-name'
                            type='text'
                        />
                        <input
                            placeholder="Last Name"
                            id='signup-last-name'
                            type='text'
                        />
                    </div>
                    <div id="signup-org-pass-fields">
                        <input
                            placeholder="Organisation Email"
                            type='email'
                        />
                        <input
                            placeholder="Password"
                            type='password'
                        />
                    </div>
                    {/* Password conditions: */}
                    <div>
                        <h2 id='signup-pass-restrict'>Password must contain at least:</h2>
                        <ul id='signup-pass-conditions'>
                            <li>8 Characters</li>
                            <li>1 Uppercase Letter</li>
                            <li>1 Lowercase Letter</li>
                            <li>1 Symbol</li>
                        </ul>
                    </div>

                    <div id='signup-sign-up-confirmation'>
                        <label htmlFor="toc-checkbox" id="signup-terms-and-conditions">
                            <input type='checkbox' id="signup-toc-checkbox" />   
                            By signing up, you agree with our <a id="signup-hyper-text" href="url">terms and conditions</a>
                        </label>
                    </div>
                </form>
                <button id="signup-sign-up-button">Sign Up</button>
                <h1 id="signup-account-exist">
                    Already have an account?&nbsp;
                    <a id="signup-sign-in-text" href="">Sign in</a>
                </h1>
            </div>
        </div>
    );
}
export default SignupPage;
