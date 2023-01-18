import login_image_1 from "../assets/images/login_image_1.png";
import login_image_2 from "../assets/images/login_image_2.png";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/tmp_logo.png";
import $ from "jquery";
import "../assets/styles/LoginPage.css";

function LoginPage() {
    const images = [login_image_1, login_image_2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            $(".login-img").animate({ opacity: 0 }, 200, function () {
                $(this).animate({ opacity: 1 }, 200);
                $(".login-img").attr("src", `${images[currentIndex]}`);
            });
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }); // No [] here as we want to continuously run this

    return (
        <div className="wrapper">
            <div className="left_view">
                <img className="login-img" src={images[currentIndex]} alt="" />
            </div>
            <div className="right_view">
                <img src={logo} alt="logo" />
                <p className="sign_in">Sign In</p>
                <p className="welcome">
                    Welcome Back! Please enter your login credentials.
                </p>
                <div>
                    <input placeholder="Email" className="email" />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        className="password"
                        type="password"
                    />
                </div>

                <div className="password_attri">
                    <div className="remember_me">
                        <input type="checkbox" />
                        <p className="remember_me_word">Remember me</p>
                    </div>
                    <div className="forgot_pass">Forgot Password?</div>
                </div>

                <button className="login_button">Log In</button>
            </div>
        </div>
    );
}

export default LoginPage;
