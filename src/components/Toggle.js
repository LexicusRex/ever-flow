import React, { useState } from "react";

export default function Toggle() {
    let nonBold = "text-[#5C5C5C] text-[1.2rem] ml-[0.3rem]";
    let bold = "text-[#5534ec] text-[1.2rem] ml-[0.3rem] underline";

    const [toggle, setToggle] = useState(true);
    const toggleClass = "transform translate-x-[94%]";

    return (
        <div>
            {/* Switch Vie */}
            {/*   Switch Container */}
            <div
                className="flex h-[2.4rem] w-[19rem] cursor-pointer items-center justify-center rounded-[0.6rem] border-[0.1rem] border-[#CCCCCC] bg-white"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {/* Switch */}
                <div
                    className={
                        "absolute ml-[-9.2rem] h-[2.4rem] w-[9.8rem] transform rounded-[0.6rem] border-[0.1rem] border-[#5534ec] bg-mild-accent opacity-50 duration-200 ease-in-out" +
                        (toggle ? null : toggleClass)
                    }
                ></div>

                <div className="mt-[0.5rem] ml-[0.8rem] flex flex-row gap-[4.75rem]">
                    <h1 className={toggle ? bold : nonBold}>Tasks</h1>
                    <h1 className={toggle ? nonBold : bold}>Meetings</h1>
                </div>
            </div>
        </div>
    );
}
