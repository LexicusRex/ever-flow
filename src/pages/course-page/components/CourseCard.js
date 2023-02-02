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
            flex
            h-[30rem] 
            w-[45rem] 
            justify-center 
            rounded-lg 
            shadow
        `}
        >
            <div>
                <div className="pt-[1rem] pb-[0.4rem]">
                    <img
                        src={courseImg}
                        alt="img"
                        className="h-[19rem] w-[42.5rem]"
                    />
                </div>
                <div className="px-[1rem]">
                    <div className="text-[2rem] font-semibold">{course}</div>
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
