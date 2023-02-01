import React from "react";
import CourseCard from "./CourseCard";

export default function CourseView() {
    return (
        <div className="text-left">
            <div className="text-[2.6rem] font-semibold">Current Courses</div>
            <div
                className={`
                    grid 
                    gap-x-[12rem] 
                    gap-y-[6rem] 
                    lg:grid-cols-1
                    xl:grid-cols-2
                    3xl:grid-cols-3
            `}
            >
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    );
}
