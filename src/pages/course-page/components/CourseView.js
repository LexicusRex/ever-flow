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
        <div className="py-[2rem] px-[4.5rem]">
            <div className="flex w-full items-center justify-between">
                <div className="text-[2.5rem] font-semibold">{title}</div>
                <div className="flex items-center gap-[2rem]">
                    <HiOutlineAdjustmentsHorizontal
                        size={28}
                        color={"#BFBFBF"}
                    />
                    <RiFilter2Fill size={28} color={"#BFBFBF"} />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-[4rem] gap-y-[5.5rem] pt-[4rem]">
                <CourseCard {...courseCard1} />
                <CourseCard {...courseCard1} />
                <CourseCard {...courseCard1} />
            </div>
        </div>
    );
}
