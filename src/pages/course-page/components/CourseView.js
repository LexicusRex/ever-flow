import React from "react";
import CourseCard from "./CourseCard";
import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export default function CourseView({ title }) {
    const courseCard1 = {
        course: "FINS1613",
        description: "Intermediate Business Programming",
        noProjects: 3,
        noTasks: 20,
        meetings: 4,
        status: "Up to Date",
    };
    return (
        <div className="text-left">
            <div className="flex max-w-[160rem] ">
                <div className="text-[2.6rem] font-semibold">{title}</div>
                <div className="ml-auto flex gap-[2rem] pt-[0.6rem]">
                    <HiOutlineAdjustmentsHorizontal
                        size={28}
                        color={"#BFBFBF"}
                    />
                    <RiFilter2Fill size={28} color={"#BFBFBF"} />
                </div>
            </div>
            <div
                className={`
                    grid 
                    gap-x-[10rem] 
                    gap-y-[6rem] 
                    py-[3rem]
                    lg:grid-cols-1
                    xl:grid-cols-2
                    3xl:grid-cols-3
            `}
            >
                <CourseCard {...courseCard1} />
                <CourseCard {...courseCard1} />
                <CourseCard {...courseCard1} />
            </div>
        </div>
    );
}
