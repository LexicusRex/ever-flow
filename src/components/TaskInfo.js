import React, { useState, useEffect } from "react";

export default function TaskInfo(props) {
    let start = new Date(
        props.info.start_date.slice(0, 10).replaceAll("-", "/")
    );
    let due = new Date(props.info.due_date.slice(0, 10).replaceAll("-", "/"));

    const status = "Complete";

    const colorMap = {
        Assigned: "text-yellow-500",
        Ongoing: "text-orange-500",
        Overdue: "text-red-500",
        Complete: "text-green-500",
    };
    return (
        <div className="flex flex-row text-[#414141] mb-[1.9rem] font-normal">
            <p className="absolute text-[1.2rem] ml-[2.3rem]">
                {/* {props.courseID} */}
                {"ACTL3182"}
            </p>
            <p className="absolute text-[1.2rem] ml-[12.15rem]">
                {/* {props.projectName} */}
                {"Assignment A"}
            </p>
            <p className="absolute text-[1.2rem] ml-[27.3rem]">
                {props.info.title}
            </p>
            <p className="absolute text-[1.2rem] ml-[60.1rem] ">{`${start.getDate()}/${(
                "0" +
                (start.getMonth() + 1)
            ).slice(-2)}/${start.getFullYear()}`}</p>
            <p className="absolute text-[1.2rem] ml-[74.6rem]">
                {`${due.getDate()}/${("0" + (due.getMonth() + 1)).slice(
                    -2
                )}/${due.getFullYear()}`}
            </p>
            <p
                className={`absolute text-[1.2rem] ml-[89.05rem] ${colorMap[status]}`}
            >
                {/* {props.status} */}
                {status}
            </p>
            <p className="absolute text-[1.2rem] ml-[105rem]">
                {/* {props.progress} */} asdasda
            </p>
        </div>
    );
}
