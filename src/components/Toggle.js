import React, { useState } from "react";

export default function Toggle() {
    let nonBold = "text-[#5C5C5C] text-[1.2rem] ml-[0.3rem]";
    let bold = "text-[#FF6262] text-[1.2rem] ml-[0.3rem] underline";

    const [toggle, setToggle] = useState(true);
    const toggleClass = "transform translate-x-[94%]";

    return (
        <div>
            {/* Switch Vie */}
            {/*   Switch Container */}
            <div
                className="h-[2.4rem] w-[19rem] flex items-center justify-center bg-white rounded-[0.6rem] cursor-pointer border-[0.1rem] border-[#CCCCCC]"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {/* Switch */}
                <div
                    className={
                        "absolute ml-[-9.2rem] bg-[#f0668033] border-[0.1rem] opacity-50 border-[#FF6262] h-[2.4rem] w-[9.8rem] rounded-[0.6rem] transform duration-200 ease-in-out" +
                        (toggle ? null : toggleClass)
                    }
                ></div>

                <div className="flex flex-row gap-[4.75rem] mt-[0.5rem] ml-[0.8rem]">
                    <h1 className={toggle ? bold : nonBold}>Tasks</h1>
                    <h1 className={toggle ? nonBold : bold}>Meetings</h1>
                </div>
            </div>
        </div>
    );
}
