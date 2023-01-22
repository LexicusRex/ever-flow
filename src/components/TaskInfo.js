import React from "react";

export default function TaskInfo(props) {
    return (
        <div className="flex flex-row text-[#414141] mb-[1.9rem] font-normal">
            <p className="absolute text-[1.2rem] ml-[2.3rem]">
                {props.courseID}
            </p>
            <p className="absolute text-[1.2rem] ml-[12.15rem]">
                {props.projectName}
            </p>
            <p className="absolute text-[1.2rem] ml-[27.3rem]">
                {props.taskName}
            </p>
            <p className="absolute text-[1.2rem] ml-[60.1rem]">
                {props.startDate}
            </p>
            <p className="absolute text-[1.2rem] ml-[74.6rem]">
                {props.dueDate}
            </p>
            <p className="absolute text-[1.2rem] ml-[89.05rem]">
                {props.status}
            </p>
            <p className="absolute text-[1.2rem] ml-[105rem]">
                {props.progress}
            </p>
        </div>
    );
}
