import React from "react";
import meetingSVG from "../icon/meeting.svg";
import projectSVG from "../icon/project.svg";
import todoSVG from "../icon/todo.svg";

export default function CourseInfoSVG({ noProjects, noTasks, meetings }) {
    return (
        <div className="flex gap-[2rem] px-[0.5rem]">
            <div className="flex flex-col">
                <div className="flex gap-[0.5rem] px-[0.3rem]">
                    <img src={projectSVG} alt="meetingSVG" />
                    {noProjects}
                </div>
                <div className="text-[0.8rem] font-normal text-[#B4B4B4]">
                    Projects
                </div>
            </div>
            <div className="flex flex-col text-center">
                <div className="flex gap-[0.5rem]">
                    <img src={todoSVG} alt="projectSVG" />
                    {noProjects}
                </div>
                <div className="text-[0.8rem] font-normal text-[#B4B4B4]">
                    Tasks
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-[0.5rem] px-[0.5rem]">
                    <img src={meetingSVG} alt="todoSVG" />
                    {noProjects}
                </div>
                <div className="text-[0.8rem] font-normal text-[#B4B4B4]">
                    Meetings
                </div>
            </div>
        </div>
    );
}
