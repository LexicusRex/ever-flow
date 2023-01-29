import React from "react";
import clsx from "clsx";
import mountain from "../assets/images/mountain.png";
import person from "../assets/images/person.png";

export default function MountainProgressView() {
    const textTW = "absolute ml-[3rem] text-[1rem] text-[#414141] z-10";
    const encouragement =
        "absolute ml-[3rem] text-[1.1rem] text-[#414141] z-10 font-medium";
    const title =
        "absolute ml-[2.5rem] text-[2rem] text-[#414141] font-semibold z-10";

    // const movement = "bottom-[-0.5rem] left-[9.5rem]";
    // bottom-[${factor * steps - 0.5}rem]
    // left-[${steps + 9.5}rem]
    const factor = 280 / 206;
    let steps = 1;
    const movement = `    
        absolute
        bottom-[${factor * steps - 0.5}rem]
        left-[${steps + 9.5}rem]
        `;

    return (
        <div
            className={clsx(
                "w-[37.5rem]",
                "h-[41vh]",
                "bg-white",
                "rounded-[1rem]",
                "py-[2.3rem]",
                "mx-[2.5rem]",
                "shadow"
            )}
        >
            {/* <div className="mx-auto w-[95%]"> */}
            <div className={title}>Progress</div>

            <div className={`${textTW} mt-[3.5rem]`}>69% of the way there</div>
            <div className={`${textTW} mt-[5rem]`}>
                22/32 of the scheduled tasks completed
            </div>
            <div className={`${textTW} mt-[6.5rem]`}>3 Meetings Attended</div>
            <div className={`${textTW} mt-[8rem]`}>
                3 Courses in Progression
            </div>
            <div className={`${encouragement} mt-[11rem]`}>
                Keep Going, You're Almost Up to Date!
            </div>

            <div className="relative z-0 h-full w-full">
                <img
                    className="mx-auto mt-[1rem] h-full w-[95%] bg-cover "
                    src={mountain}
                />
                <img src={person} alt="person" className={movement} />
            </div>
        </div>
    );
}
