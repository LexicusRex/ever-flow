import React from "react";
import clsx from "clsx";
import mountain from "../assets/images/mountain2.png";
import person from "../assets/images/person.png";
import "../assets/styles/MountainProgressTracker.css";

export default function MountainProgressView() {
    const textTW = "absolute ml-[3rem] text-[1rem] text-[#414141] z-10";
    const encouragement =
        "absolute ml-[3rem] text-[1.1rem] text-[#414141] z-10 font-medium";
    const title =
        "absolute ml-[2.5rem] text-[2rem] text-[#414141] font-semibold z-10";

    const progress = 100 - 15;
    const isFinished = progress >= 85;
    const mountProgress = {
        left: progress.toString() + "%",
        rotate: isFinished && "45deg",
    };
    return (
        <div
            className={clsx(
                "w-[37.5rem]",
                "h-[41vh]",
                "bg-white",
                "rounded-[1rem]",
                "py-[2.3rem]",
                // "mx-[2.5rem]",
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

            <div className="relative h-full w-full overflow-hidden">
                <div className={`left-mountain ${isFinished && "fin"}`}>
                    <div id="mount-path" className="relative h-[30px] w-full">
                        <img
                            src={person}
                            alt="person"
                            style={mountProgress}
                            className={`
                                absolute
                                bottom-10
                            `}
                        />
                    </div>
                </div>
                <div className="flag-group">
                    <div className="flag-pole"></div>
                    <div
                        id="flag"
                        className={`${
                            isFinished ? "bg-green-300" : "bg-red-400"
                        }`}
                    ></div>
                </div>
                <div className="right-mountain"></div>
                <img
                    className="mx-auto mt-[1rem] h-full w-[95%] object-cover "
                    src={mountain}
                    alt="mountain"
                />
            </div>
        </div>
    );
}
