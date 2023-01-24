import React from "react";

export default function TaskInfo(props) {
    let start = new Date(
        props.info.start_date.slice(0, 10).replaceAll("-", "/")
    );
    let due = new Date(props.info.due_date.slice(0, 10).replaceAll("-", "/"));

    const status = "Ongoing";
    const progress = 0.3;

    const colorMap = {
        Assigned: "text-yellow-500",
        Ongoing: "text-orange-500",
        Overdue: "text-red-500",
        Complete: "text-green-500",
    };

    return (
        <div className="hover:bg-pink-600 hover:bg-opacity-[20%] h-[2.8rem] align-middle">
            <div className="text-[#414141] ml-[2.1rem] flex h-fit">
                <div className="grid grid-flow-col gap-x-[3.5rem]">
                    <p className="text-[1.2rem] w-[6rem]">{"ACTL3182"}</p>
                    <p className="text-[1.2rem] w-[11rem]">{"Assignment A"}</p>
                    <p className="text-[1.2rem] w-[20rem]">
                        {props.info.title}
                    </p>
                </div>

                <div className="ml-auto grid grid-flow-col gap-x-[4rem]">
                    <p className="text-[1.2rem] w-[6.4rem]">
                        {`${start.getDate()}/${(
                            "0" +
                            (start.getMonth() + 1)
                        ).slice(-2)}/${start.getFullYear()}`}
                    </p>
                    <p className="text-[1.2rem] w-[6.4rem]">
                        {`${due.getDate()}/${("0" + (due.getMonth() + 1)).slice(
                            -2
                        )}/${due.getFullYear()}`}
                    </p>
                    <p className="text-[1.2rem] w-[6rem]">{status}</p>

                    <div className="mr-[2.2rem] w-[12rem] h-[1.3rem] bg-[#D9D9D9] mt-[0.1rem] rounded-[0.2rem]">
                        <div className="w-[10%] h-[1.3rem] rounded-[0.2rem] bg-[#83C96A]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
