import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchBox() {
    const BarStyle = {
        height: "3.2rem",
        background: "#D9D9D9",
        border: "none",
        padding: "0.5rem",
        borderRadius: "0.6rem",
        outline: "none",
        paddingLeft: "5rem",
    };

    return (
        <div className="flex">
            <BiSearchAlt
                size={25}
                color="#8A8A8A"
                className="absolute mt-[0.4rem] ml-[1rem] scale-x-[-1]"
            />
            <div className="flex w-[25rem] flex-col">
                <input
                    style={BarStyle}
                    key="search-bar"
                    placeholder={"Search"}
                    className="flex"
                />
            </div>
        </div>
    );
}
