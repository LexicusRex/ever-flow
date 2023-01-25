import logo from "../assets/images/logo-left.svg";
import "../assets/styles/MenuButton.css";
import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuBar({ itemFocus }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleMenuToggle = () => {
        setToggleMenu((toggleMenu) => !toggleMenu);
    };

    return (
        <div>
            <button
                className={`hamburger ${toggleMenu && "is-active"}`}
                onClick={handleMenuToggle}
            >
                <div className="bar"></div>
            </button>

            <div
                id="menu"
                className="fixed h-[100vh] w-[280px] border-[1px] bg-white px-[17px]"
            >
                {/* <div> */}
                <div
                    id="img-div"
                    className="flex h-[16.5rem] w-full items-center justify-center"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[25rem] items-center justify-center"
                    />
                </div>
                <p className="ml-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#776e6e]">
                    Workflow
                </p>
                <div
                    id="workflow-group"
                    className="flex-column flex items-center justify-center"
                >
                    <MenuItem itemName={"Dashboard"} focusedItem={itemFocus} />
                    <MenuItem itemName={"Courses"} focusedItem={itemFocus} />
                    <MenuItem itemName={"Projects"} focusedItem={itemFocus} />
                    <MenuItem itemName={"Meetings"} focusedItem={itemFocus} />
                    <MenuItem itemName={"Schedule"} focusedItem={itemFocus} />
                </div>
                <hr className="my-[40px] border-[2px] " />
                <p className="ml-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#776e6e]">
                    Analytics
                </p>

                <div
                    id="analytics-group"
                    className="flex-column flex items-center justify-center"
                >
                    <MenuItem
                        itemName={"Performance"}
                        focusedItem={itemFocus}
                    />
                    <MenuItem itemName={"Stuff"} focusedItem={itemFocus} />
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}
export default MenuBar;
