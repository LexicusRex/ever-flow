import React from "react";
import courseImg from "../img/course_examplar_image.png";
import projectSVG from "../icon/project.svg";
import CourseInfoSVG from "./CourseInfoSVG";

export default function CourseCard({
    course,
    description,
    noProjects,
    noTasks,
    meetings,
    status,
}) {
    return (
        <div
            className={`
            hover:
            flex
            h-[30rem]
            min-w-[40rem]
            max-w-[60rem] 
            grow
            cursor-pointer 
            flex-col 
            items-center
            justify-center
            rounded-lg
            text-left
            shadow-md hover:shadow-lg
            hover:shadow-focus-accent
        `}
        >
            <div className="w-full">
                <img
                    src={courseImg}
                    alt="img"
                    className="
                        h-[19rem]
                        w-full
                        object-cover
                        px-[1rem]
                        pt-[1rem]
                        pb-[0.4rem]
                    "
                />
                <div className="px-[1rem]">
                    <div className=" text-[2rem] font-semibold">{course}</div>
                    <div className="pb-[0.3rem] text-[1.4rem] font-medium">
                        {description}
                    </div>
                    <div>
                        <CourseInfoSVG {...{ noProjects, noTasks, meetings }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
