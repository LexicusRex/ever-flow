import React from "react";
import Toggle from "./Toggle";
import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

function TaskView() {
    return (
        <div className="w-[115rem] h-[47.5rem] bg-white rounded-[1rem] drop-shadow overflow-hidden ">
            {/* Top layer title + switch bar + icons */}
            <div className="flex flex-row mt-[2.7rem]">
                <h1 className="font-semibold text-[2.2rem] ml-[2.1rem]">
                    Scheduled Tasks & Meetings
                </h1>
                <div className="ml-[49rem]">
                    <Toggle />
                </div>

                <div className="ml-[2.2rem]">
                    <HiOutlineAdjustmentsHorizontal color="#BFBFBF" size={25} />
                </div>
                <div className="ml-[1.9rem]">
                    <RiFilter2Fill color="#BFBFBF" size={25} />
                </div>
            </div>
            {/* Titles: */}
            <div className="flex flex-row text-[#776E6E] gap-[4rem] mt-[2.7rem]">
                <h1 className="text-[1.2rem] ml-[2.3rem]">Course ID</h1>
                <h1 className="text-[1.2rem]">Project Name</h1>
                <h1 className="text-[1.2rem] ml-[3rem]">Task Name</h1>
                <h1 className="text-[1.2rem] ml-[22rem]">Start Date</h1>
                <h1 className="text-[1.2rem] ml-[4.4rem]">Due Date</h1>
                <h1 className="text-[1.2rem] ml-[5rem]">Status</h1>
                <h1 className="text-[1.2rem] ml-[6rem]">Progress</h1>
            </div>

            {/* Line separator */}
            <div className="flex justify-center">
                <div className="border-[0.1rem] w-[110rem] bg-[#F0F3F6]" />
            </div>
        </div>
    );
}

export default TaskView;
