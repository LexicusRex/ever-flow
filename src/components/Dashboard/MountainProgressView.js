import React from "react";
import clsx from "clsx";
import mountain from "../../assets/images/mountain.png";

export default function MountainProgressView() {
    return (
        <div
            className={clsx(
                "w-[37.5rem]",
                "h-[47.5rem]",
                "bg-white",
                "rounded-[1rem]",
                "py-[2.3rem]",
                "mx-[2.5rem]",
                "my-[1.5rem]",
                "drop-shadow"
            )}
        >
            <div className="ml-[1.7rem] text-[2rem] font-semibold">
                Progress
            </div>
            <div className="mt-[1.5rem] ml-[2.5rem] text-[1rem] text-[#414141]">
                69% of the way there
            </div>
            <div className="ml-[2.5rem] text-[1rem] text-[#414141]">
                22/32 of the scheduled tasks completed
            </div>
            <div className="ml-[2.5rem] text-[1rem] text-[#414141]">
                3 Meetings Attended
            </div>
            <div className="z-1 ml-[2.5rem] text-[1rem] text-[#414141]">
                3 Courses in Progression
            </div>
            {/* <div className="mx-auto w-[95%]"> */}
            <div className="absolute bottom-10 z-0">
                <img className="mx-auto w-[95%] bg-cover" src={mountain} />
            </div>
        </div>
    );
}
