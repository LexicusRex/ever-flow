import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
import TaskInfo from "./TaskInfo";
import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import useFetch from "hooks/useFetch";

function TaskView() {
    const [tasks, setTasks] = useState("");
    const { getTasks } = useFetch();

    useEffect(() => {
        const taskData = async () => {
            let taskList = [];
            const tmp = await getTasks();
            setTasks(tmp);
            tmp.forEach((e) => {
                console.log(e);
                taskList.push(<TaskInfo info={e} />);
            });
            setTasks(taskList);
        };
        taskData();
    }, []);

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
            <div className="flex flex-row text-[#776E6E] gap-[4rem] mt-[2.7rem] mb-[1.7rem]">
                <h1 className="text-[1.2rem] ml-[2.3rem]">Course ID</h1>
                <h1 className="text-[1.2rem]">Project Name</h1>
                <h1 className="text-[1.2rem] ml-[3rem]">Task Name</h1>
                <h1 className="text-[1.2rem] ml-[22rem]">Start Date</h1>
                <h1 className="text-[1.2rem] ml-[4.4rem]">Due Date</h1>
                <h1 className="text-[1.2rem] ml-[5rem]">Status</h1>
                <h1 className="text-[1.2rem] ml-[6rem]">Progress</h1>
            </div>

            {/* Line separator */}
            <div className="flex justify-center mb-[2.4rem]">
                <div className="border-[0.1rem] w-[110rem] bg-[#F0F3F6]" />
            </div>

            {/* All tasks */}
            <div className="w-screen h-[75%] overflow-auto ">{tasks}</div>
        </div>
    );
}

export default TaskView;
